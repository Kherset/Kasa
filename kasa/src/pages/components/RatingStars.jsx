import './styles.css';

function RatingStars({ score }) {
  const stars = Array.from({ length: 5 }, (_, index) => ( // (_, index) the first parameter (here, _, is a convention indicating an unused variable)
    <i key={index + 1} className={`fa-solid fa-star ${index < score ? 'fa-star-colored' : ''}`}></i>
  ));

  return (
    <div className='rating'>
      <span>{stars}</span>
    </div>
  );
}

export default RatingStars;
