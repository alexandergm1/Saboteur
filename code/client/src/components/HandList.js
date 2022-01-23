import React from 'react';
import Card from './Card';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'

function HandList({cards, reorderHand}) {

   const cardNodes =  cards.map((card, index) => {
    
        return (<Card key = {index} card={card} index ={index}/>)
    })
       
  function handleOnDragEnd(result){
    if (!result.destination) return
    else if (result.destination.droppableId === "discard"){
      const items = Array.from(cards)
      items.splice(result.source.index, 1)
      reorderHand(items) 
      return
    }
    else if (result.destination.droppableId === "cards"){
    const items = Array.from(cards)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)
    reorderHand(items)
    }
  }
  
  
  return (
    <div className = "hand-container">
  <DragDropContext onDragEnd= {handleOnDragEnd}>
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

  </DragDropContext>
  </div>
  )
}

export default HandList;
