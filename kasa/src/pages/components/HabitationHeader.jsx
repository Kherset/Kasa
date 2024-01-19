import TagList from "../components/TagList.jsx";
import RatingStars from "../components/RatingStars.jsx";
import './styles.css';

function HabitationHeader({ renterFounded }) {
  const fullName = renterFounded.host.name;
  const [firstName, lastName] = fullName.split(' ');

  return (
    <div className='habitation-header'>
      <div className='habitation-informations'>
        <div className='title-and-localisation'>
          <h2 className='habitation-header-title'>{renterFounded.title}</h2>
          <p className='habitation-header-localisation'>{renterFounded.location}</p>
        </div>
        <TagList />
      </div>
      <div className='profil-and-rating'>
        <div className='renter'>
          <div className='renter-identity'>
            <h4 className='name'>{firstName}</h4>
            <h4 className='name'>{lastName}</h4>
          </div>
          <img src={renterFounded.host.picture} className='profil-img' alt="Visage du loueur du bien" />
        </div>
        <RatingStars score={renterFounded.rating} />
      </div>
    </div>
  );
}

export default HabitationHeader;
