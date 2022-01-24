import React from 'react';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'


function Card({card, index, handleOnClickInvert}) {

  const onClickInvert = () => {
    handleOnClickInvert(index)
  }


  return (
    <Draggable key={index} draggableId={`${index}`} index={index}>
    {(provided) => (
      <div id='card-wrapper'>
          <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
            <div className = "card" style={{backgroundImage: `url(${card.image_url})`, backgroundSize: 'cover',  transform: card.inverted ? 'rotate(180deg)': null}} onClick = {onClickInvert}>
            </div>
          </div>
      </div>
      )}
    </Draggable>
  )
}

export default Card;
