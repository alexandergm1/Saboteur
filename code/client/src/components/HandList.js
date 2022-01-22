import React from 'react';
import Card from './Card';

function HandList({card}) {

   const cardNodes = card.map((row, rowIndex) => {
    return row.map((item, colIndex) => {
        return (<Card  row = {rowIndex} col={colIndex} card={card} key = {rowIndex.toString() + colIndex.toString()}/>)
    })
       
   })
  
  return <div>
      <p>I am a hand list</p>
      {cardNodes}
  </div>;
}

export default HandList;
