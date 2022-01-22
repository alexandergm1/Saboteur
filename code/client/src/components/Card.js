import React from 'react';

function Card({ card}) {
  return <div className = "card"
  style={{backgroundImage: `url(${card.image_url})`, backgroundSize: 'cover' }}>
 
  </div>;
}

export default Card;
