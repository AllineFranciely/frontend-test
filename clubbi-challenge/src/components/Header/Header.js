import React from 'react';
import './Header.css';
import Logo from '../../images/logo.jpeg';

function Header() {
  return (
    <header className="header">
      <p className="balao">Welcome</p>
      <h1 className="clubbiTitle">Clubbi Films</h1>
      <img className="logo" src={Logo} alt="logo"/>
    </header>
  );
}

export default Header;
