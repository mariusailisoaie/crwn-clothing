import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/original.svg';
import './Header.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { currentUserSelector } from '../../selectors/userSelector';
import { signOutStart } from '../../actions/userActions';
import { cartHiddenSelector } from '../../selectors/cartSelector';

import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';

const Header = ({ currentUser, hidden, signOutStart }) => (
  <div className='header'>
    <div className='logo-home-container'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
        <div className='home'>HOME</div>
      </Link>
    </div>
    <div className='options'>
      <Link className='option' to='/shop'>SHOP</Link>
      <Link className='option' to='/contact'>CONTACT</Link>
      {
        currentUser ?
          <div className='option' onClick={ signOutStart }>SIGN OUT</div>
          :
          <Link className='option' to='/signin'>SIGN IN</Link>
      }
      <CartIcon />
    </div>
    {
      hidden ? null : <CartDropdown />
    }
  </div>
)

const mapStateToProps = createStructuredSelector({
  currentUser: currentUserSelector,
  hidden: cartHiddenSelector,
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
