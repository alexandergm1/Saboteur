import React from 'react';
import Card from './Card';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'

function HandList({cards}) {

   const cardNodes =  cards.map((card, index) => {
    
        return (<Card key={index} card={card} index={index}/>)
    })
  
  return (
    <div className = "hand-container">
    <div>
    <Droppable droppableId="cards" direction="horizontal">
      {(provided) => (
        <div id="hand-list" {...provided.droppableProps} ref={provided.innerRef}>
            {cardNodes}
            {provided.placeholder}
        </div>
      )}
    </Droppable>
    </div>
    <div>
    <Droppable droppableId="discard">
      {(provided) => (
          <div id="discard" {...provided.droppableProps} ref={provided.innerRef} index = "7">
            <img className='delete' src={require('../img/delete.png')}/>
            {provided.placeholder} 
          </div>
      )}
    </Droppable>
    </div>
    
  </div>
  )
}

export default HandList;
