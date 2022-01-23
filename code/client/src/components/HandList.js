import React from 'react';
import Card from './Card';

function HandList({cards, role}) {

   const cardNodes =  cards.map((card, index) => {
    
        return (<Card  key = {index} card={card}/>)
    })
       
  
  
  return <div id="hand-list">
      <p>I am a hand list</p>
      {cardNodes}
      <p>Role Container</p>
      <div className= "role"  style={{backgroundImage: `url(${role.image_url})`, backgroundSize: 'cover' }}>
    </div>
  </div>;
}

export default HandList;
