import React, { Component } from 'react';

import './SignIn.scss';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ email: '', password: '' });
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with email and password instead</span>

        <form onSubmit={ this.handleSubmit }>
          <FormInput
            type='email'
            name='email'
            value={ this.state.email }
            handleChange={ this.handleChange }
            label='Email'
            required
          />

          <FormInput
            type='password'
            name='password'
            value={ this.state.password }
            handleChange={ this.handleChange }
            label='Password'
            required
          />

          <div className='buttons'>
            <CustomButton type='submit'>Sign In</CustomButton>
            <CustomButton onClick={ signInWithGoogle } isGoogleSignIn>Sign In with Google</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;