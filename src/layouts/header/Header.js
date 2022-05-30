import React, { Component } from 'react';
import './Header.css';
import baptiste from '../../assets/images/baptiste-benoit.jpeg'

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className='name-avatar'>
          <span className='name'>Baptiste <br /> BENOIT</span>
          <img className='avatar' alt='Avatar Baptiste BENOIT' src={baptiste}></img>
        </div>
      </div>
    );
  }
}

export default Header;
