import React, { useState } from 'react';
import { connect } from 'react-redux';

import './SignIn.scss';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import { googleSignInStart, emailSignInStart } from '../../actions/userActions';

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });

  const { email, password } = userCredentials;

  const handleSubmit = async e => {
    e.preventDefault();

    emailSignInStart(email, password);
  }

  const handleChange = e => {
    const { name, value } = e.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  }

  return (
    <div className='sign-in'>
      <h2 className='title'>I already have an account</h2>
      <span>Sign in with email and password instead</span>

      <form onSubmit={ handleSubmit }>
        <FormInput
          type='email'
          name='email'
          value={ email }
          handleChange={ handleChange }
          label='Email'
          required
        />

        <FormInput
          type='password'
          name='password'
          value={ password }
          handleChange={ handleChange }
          label='Password'
          required
        />

        <div className='buttons'>
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton type='button' onClick={ googleSignInStart } isGoogleSignIn>Sign In with Google</CustomButton>
        </div>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
