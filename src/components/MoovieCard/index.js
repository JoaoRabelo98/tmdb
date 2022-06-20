import React from 'react';
import './index.css';

const MoovieCard = ({image, title, rating, overview}) => {
  return (
    <div className='content'>
      <div className='image'>
        <img src={image} alt="anything" />
      </div>
      <div className='details'>
        <div className='description-content'>
          <span className='description'>{title}</span> 
        </div>
        <div className='rating-content'>
          <span>{rating}</span>
        </div>
      </div> 

      <div className='overview'>
        <h3>Resumo</h3>

        <span>{overview}</span>
      </div>     
    </div>
  );
}

export default MoovieCard;