const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')

if (process.env.NODE_ENV !== 'production') require('dotenv').config()

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')))

  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  })
}

app.post('/payments', (req, res) => {
  const { token, amount } = req.body

  const body = {
    source: token.id,
    amount,
    currency: 'dkk',
  }

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).json({ error: stripeErr })
    } else {
      res.status(200).json({ success: stripeRes })
    }
  })
})

app.get('/ping', (req, res) => {
  res.json({ 'message': 'pong' })
})

app.listen(port, error => {
  if (error) throw error
  console.log(`Server running on port ${ port }`)
})
