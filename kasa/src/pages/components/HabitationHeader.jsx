import './styles.css'
import { useParams } from 'react-router-dom';
import accommodations from '../../datas/accommodations.json';

function HabitationHeader() {

  const { id } = useParams();
  const renterFounded = accommodations.find(renter => renter.id === id)

  return ( <div className='habitation-header'>
    <div className='habitation-informations'>
      <div className='title-and-localisation'>
        <h2 className='habitation-header-title'>{renterFounded.title}</h2>
        <p className='habitation-header-localisation'>{renterFounded.location}</p>
      </div>
      <div className='habitation-header-tags-container'>
        <span className='habitation-header-tag'>Cosy</span>
        <span className='habitation-header-tag'>Canal</span>
        <span className='habitation-header-tag'>Paris 10</span>
      </div>
    </div>
    <div className='profil-and-rating'>
      <div className='renter'>
        <div className='renter-identity'>
          <h5 className='name'>{renterFounded.host.name}</h5>
        </div>
        <img src={renterFounded.host.picture} className='profil-img' alt="Visage du loueur du bien"></img>
      </div>
      <div className='rating'>
        <i className="fa-solid fa-star fa-star-colored"></i>
        <i className="fa-solid fa-star fa-star-colored"></i>
        <i className="fa-solid fa-star fa-star-colored"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </div>
    </div>
  </div>
  )
}
export default HabitationHeader
