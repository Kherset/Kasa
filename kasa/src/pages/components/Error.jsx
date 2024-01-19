import './styles.css';
import { NavLink } from 'react-router-dom';

function Error() {
  return (
    <section className='error-section' id='error-section'>
      <h2 id='error-number'>404</h2>
      <p id='error-text'>Oups! La page que vous demandez n'existe pas.</p>
      <NavLink to='/' id='error-homepage-link'>
        <h2>Retourner sur la page d'accueil</h2>
      </NavLink>
    </section>
  );
}

export default Error;
