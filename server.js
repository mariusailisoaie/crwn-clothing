const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const axios = require('axios')

if (process.env.NODE_ENV !== 'production') require('dotenv').config()

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')))

  app.get(/^\/(?!api).*/, function (req, res) { // don't serve react app to api routes
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

app.get('/api/ping', (req, res) => {
  res.json({ 'message': 'pong' })
})

app.listen(port, error => {
  if (error) throw error

  setInterval(async () => {
    const { data } = await axios.get('https://crown-clothing-copenhagen.herokuapp.com/api/ping')
  }, 1000)

  console.log(`Server running on port ${ port }`)
})
