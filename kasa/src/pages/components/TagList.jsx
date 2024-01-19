import accommodations from '../../datas/accommodations.json';
import { useParams } from 'react-router-dom';
import './styles.css';

function TagList() {
  const { id } = useParams();
  const currentAccommodation = accommodations.find(accommodation => accommodation.id === id);
  const currentTags = currentAccommodation.tags;

  return (
    <section className='habitation-header-tags-container'>
      {currentTags.map(tag => (
        <span key={`${currentAccommodation.id}-${tag}`} className='habitation-header-tag'>{tag}</span>
      ))}
    </section>
  );
}

export default TagList;
