import React from 'react';
import './Footer.css';
import Logo from '../../images/logo.gif';
import Instagram from '../../images/instagram.png';
import LinkedIn from '../../images/linkedin.png';
import GitHub from '../../images/github.png';

function Footer() {
  return (
    <div className="footerInteiro">
      <div className="imageFooter">
        <img src={Logo} alt="Logo" className="LogoFooter" />
        <div>
          <a
            href="https://www.linkedin.com/in/alline-franciely-silva/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="rede" src={LinkedIn} alt="LinkedIn"></img>
          </a>
          <a
            href="https://www.instagram.com/alline_franciely/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="rede" src={Instagram} alt="Instagram"></img>
          </a>
          <a
            href="https://github.com/AllineFranciely"
            target="_blank"
            rel="noreferrer"
          >
            <img className="rede" src={GitHub} alt="GitHub"></img>
          </a>
        </div>
      </div>
      <hr className="footerLine"></hr>
      <p className="pFooter">© 2022 <b>Alline Franciely</b>.</p>
    </div >
  );
}

export default Footer;
