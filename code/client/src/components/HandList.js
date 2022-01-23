import React from 'react';
import Card from './Card';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'


function HandList({cards, reorderHand, role}) {


   const cardNodes =  cards.map((card, index) => {
    
        return (<Card key = {index} card={card} index ={index}/>)
    })
  
  return (
   
    <div className = "hand-container">
    <Droppable droppableId="cards" direction="horizontal">
      {(provided) => (
        <div className = "hand-list" id="hand-list" {...provided.droppableProps} ref={provided.innerRef}>
            {cardNodes}
          {provided.placeholder}
        </div>
      )}
    </Droppable>


    <Droppable droppableId="discard">
    {(provided) => (
      <div className = "testing-drop-grid" id="test-drop" {...provided.droppableProps} ref={provided.innerRef} index = "7">
      {provided.placeholder} Discard
      </div>
    )}
    </Droppable>
  </div>
  <p>Role Container</p>
  <div className= "role"  style={{backgroundImage: `url(${role.image_url})`, backgroundSize: 'cover' }}>
  </div>

  )   
}

export default HandList;
