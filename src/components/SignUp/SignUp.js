import React, { useState } from 'react';
import { connect } from 'react-redux';

import './SignUp.scss';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import { signUpStart } from '../../actions/userActions';

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async e => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    signUpStart({ displayName, email, password });
  }

  const handleChange = e => {
    const { name, value } = e.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  }

  return (
    <div className='sign-up'>
      <h2 className='title'>I don't have an account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={ handleSubmit }>
        <FormInput
          type='text'
          name='displayName'
          value={ displayName }
          onChange={ handleChange }
          label={ 'Display Name' }
          required
        />
        <FormInput
          type='email'
          name='email'
          value={ email }
          onChange={ handleChange }
          label={ 'Email' }
          required
        />
        <FormInput
          type='password'
          name='password'
          value={ password }
          onChange={ handleChange }
          label={ 'Password' }
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={ confirmPassword }
          onChange={ handleChange }
          label={ 'Confirm Password' }
          required
        />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
