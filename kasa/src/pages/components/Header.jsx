import './styles.css'
import logoDesktop from "../../images/logoDesktop.png";


function Header() {
  return ( <header className='header' id='header'>
        <img src={logoDesktop} alt='Logo de Kasa' className='logo-desktop'></img>
        <div id='header-links'>
          <a href='/' id='homepage-link'> <h2 >Accueil</h2> </a>
          <a href='/' id='about-link'> <h2>A Propos</h2> </a>
        </div>
    </header>
  )
}
export default Header
