import React from 'react';
import Card from './Card';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'

function HandList({cards, handleOnClickInvert}) {

   const cardNodes =  cards.map((card, index) => {
    
        return (<Card key={index} card={card} index={index} handleOnClickInvert = {handleOnClickInvert}/>)
    })
  
  return (
   
    <div className = "hand-container">
    <div id='hand-wrapper'>
    <Droppable droppableId="cards" direction="horizontal">
      {(provided) => (
        <div id="hand-list" {...provided.droppableProps} ref={provided.innerRef}>
            {cardNodes}
            {provided.placeholder}
        </div>
      )}
    </Droppable>
    </div>
    <div id='bin-wrapper'>
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
//   <p>Role Container</p>
//   <div className= "role"  style={{backgroundImage: `url(${role.image_url})`, backgroundSize: 'cover' }}>
//   </div>

//   )   
// >>>>>>> 203c8d890671d0b58285c4810a3f1159fb56d39c
}

export default HandList;
