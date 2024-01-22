import React from 'react';
import { NavLink } from 'react-router-dom';
import logoDesktop from '../../images/logoDesktop.png';
import logoMobile from '../../images/logoMobile.png';
import './styles.css';

function Header() {
  return (
    <header className='header' id='header'>
      <img src={logoDesktop} alt='Logo de Kasa' className='logo-desktop'></img>
      <img src={logoMobile} alt='Logo de Kasa' className='logo-mobile'></img>
      <div id='header-links'>
        <NavLink to='/' id='homepage-link' >
          <h2>Accueil</h2>
        </NavLink>
        <NavLink to='/about' id='about-link'>
          <h2>A Propos</h2>
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
