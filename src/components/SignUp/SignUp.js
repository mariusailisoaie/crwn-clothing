import React, { Component } from 'react';
import { connect } from 'react-redux';

import './SignUp.scss';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import { signUpStart } from '../../actions/userActions';

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  }

  handleSubmit = async e => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    const { signUpStart } = this.props;

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    signUpStart({ displayName, email, password });
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className='sign-up'>
        <h2 className='title'>I don't have an account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={ this.handleSubmit }>
          <FormInput
            type='text'
            name='displayName'
            value={ displayName }
            onChange={ this.handleChange }
            label={ 'Display Name' }
            required
          />
          <FormInput
            type='email'
            name='email'
            value={ email }
            onChange={ this.handleChange }
            label={ 'Email' }
            required
          />
          <FormInput
            type='password'
            name='password'
            value={ password }
            onChange={ this.handleChange }
            label={ 'Password' }
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={ confirmPassword }
            onChange={ this.handleChange }
            label={ 'Confirm Password' }
            required

          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
