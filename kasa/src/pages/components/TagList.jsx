import './styles.css';
import accommodations from '../../datas/accommodations.json';
import { useParams } from 'react-router-dom';

function TagList() {
  const { id } = useParams();
  const currentAccomodation = accommodations.find(accomodation => accomodation.id === id);
  const currentTags = currentAccomodation.tags;

  return (
    <section className='habitation-header-tags-container'>
      {currentTags.map(tag => (
        <span key={`${currentAccomodation.id}-${tag}`} className='habitation-header-tag'>{tag}</span>
      ))}
    </section>
  );
}

export default TagList;
