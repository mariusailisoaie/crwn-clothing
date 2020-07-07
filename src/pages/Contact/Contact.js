import React from 'react';

import Script from 'react-load-script';

import './Contact.scss';

const Contact = () => (
  <div className='contact-page'>
    <Script url='https://platform.linkedin.com/badges/js/profile.js' />

    <h1 className='get-in-touch'>Let's get in touch!</h1>

    <div class='LI-profile-badge' data-version='v1' data-size='medium' data-locale='en_US' data-type='vertical' data-theme='light' data-vanity='marius-ailisoaie'>
      <a class='LI-simple-link' href='https://dk.linkedin.com/in/marius-ailisoaie?trk=profile-badge'>Marius Ailisoaie</a>
    </div>
  </div>
)

export default Contact;
