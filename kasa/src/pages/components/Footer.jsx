import logoDesktop from "../../images/logoDesktop.png";
import './styles.css';

function Footer() {
  return (
    <footer className='footer' id='footer'>
      <div id='copyright-section'>
        <img src={logoDesktop} alt='Logo de Kasa' className='logo-desktop-footer'></img>
        <h3 id='Legal-mentions'>© 2020 Kasa. All rights reserved</h3>
      </div>
    </footer>
  );
}

export default Footer;
