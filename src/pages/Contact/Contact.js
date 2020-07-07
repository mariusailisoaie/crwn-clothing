import React from 'react';

import './Contact.scss';

const Contact = () => (
  <div className='contact-page'>
    <h1 className='get-in-touch'>Let's get in touch!</h1>

    <div className='linkedin-card'>
      <div className='linkedin-card-top'>
        <img className='linkedin-background' src='https://static-exp1.licdn.com/sc/h/856xpihrituhwdjrua9z5u5na' alt='linkedin' />
        <img className='profile-picture' src='https://i.ibb.co/0QX0pVk/0.jpg' alt='profile' />
      </div>

      <div className='linkedin-card-bottom'>
        <a className='name' href='https://www.linkedin.com/in/marius-ailisoaie/'>Marius Ailisoaie</a>
        <span className='position'>Software Developer</span>
        <a className='profile-button' href='https://www.linkedin.com/in/marius-ailisoaie/'>View profile</a>
        <a className='linkedin-logo' href='https://www.linkedin.com/in/marius-ailisoaie/'>
          <img src='https://static-exp1.licdn.com/scds/common/u/images/logos/linkedin/logo_linkedin_93x21_v2.png' alt='linkedin-icon' srcset='' />
        </a>
      </div>
    </div>
  </div>
)

export default Contact;
