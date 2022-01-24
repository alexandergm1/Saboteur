import React from 'react';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'

function GridItem({row, col, item}) {
  
  return (

  <div className = "card" style={{backgroundImage: `url(${item.image_url})`, backgroundSize: 'cover', transform: item.inverted ? 'rotate(180deg)': null}}>

  <Droppable droppableId={"grid" + "-" + `${row}` + "-" + `${col}`}>
    {(provided, snapshot) => (
      <div className = "grid-item-drop-zone" {...provided.droppableProps} ref={provided.innerRef}  index = {`${col + row}`} style = {{ background:  snapshot.isDraggingOver ? "lightblue" : null}}>
        {provided.placeholder}
      </div>
    )}
  </Droppable>

  </div>

  )
}

export default GridItem