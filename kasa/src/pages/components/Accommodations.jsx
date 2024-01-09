import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';
import accommodations from '../../datas/accommodations.json';

const AccommodationCard = ({ title, style }) => (
  <div className="accommodations-item" style={style}>
      <h4 className='accommodations-item-title'>{title}</h4>
  </div>
);

const Accommodations = () => {
  return (
    <section className='accommodations-container' id='accommodations-container'>
      {accommodations.map(accommodation => (
        <NavLink to={`/accommodation/${accommodation.id}`} key={accommodation.id}>
          <AccommodationCard
            title={accommodation.title}
            style={{
              backgroundImage: `url(${accommodation.cover})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </NavLink>
      ))}
    </section>
  );
};

export default Accommodations;
