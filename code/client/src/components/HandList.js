import React from 'react';
import Card from './Card';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'

function HandList({cards, reorderHand}) {

  //  const cardNodes =  cards.map((card, index) => {
    
  //       return (<Card  key = {index} card={card}/>)
  //   })
       
  function handleOnDragEnd(result){
    if (!result.destination) return
    const items = Array.from(cards)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)
    reorderHand(items)
  }
  
  
  return (
  <DragDropContext onDragEnd= {handleOnDragEnd}>
    <Droppable droppableId="cards" direction="horizontal">
      {(provided) => (
      <div className = "hand-list" id="hand-list" {...provided.droppableProps} ref={provided.innerRef}>
      {cards.map((card, index) => {
      return (
        <Draggable key={index} draggableId={`${index}`} index={index}>
        {(provided) => (
          <div>
              <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                <div className = "card" style={{backgroundImage: `url(${card.image_url})`, backgroundSize: 'cover'}}>
                </div>
              </div>
          </div>
          )}
        </Draggable>
      )
      })}
      {provided.placeholder}
      </div>
      )}
    </Droppable>
  </DragDropContext>
  )
}

export default HandList;
