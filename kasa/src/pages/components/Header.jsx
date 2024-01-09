import './styles.css'
import logoDesktop from "../../images/logoDesktop.png";
import { NavLink } from 'react-router-dom';


function Header() {
  return ( <header className='header' id='header'>
        <img src={logoDesktop} alt='Logo de Kasa' className='logo-desktop'></img>
        <div id='header-links'>
          <NavLink to='/' id='homepage-link'> <h2 >Accueil</h2> </NavLink>
          <NavLink to='/' id='about-link'> <h2>A Propos</h2> </NavLink>
        </div>
    </header>
  )
}
export default Header
