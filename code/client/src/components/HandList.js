import React from 'react';
import Card from './Card';

function HandList({cards}) {

   const cardNodes =  cards.map((card, index) => {
    
        return (<Card  key = {index} card={card}/>)
    })
       
  
  
  return <div id="hand-list">
      <p>I am a hand list</p>
      {cardNodes}
  </div>;
}

export default HandList;
