import React from 'react';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'

function GridItem({row, col, item}) {
  
  return (
  <Droppable droppableId={"grid" + "-" + `${row}` + "-" + `${col}`}>
    {(provided) => (
      <div className = "card" style={{backgroundImage: `url(${item.image_url})`, backgroundSize: 'cover'}} {...provided.droppableProps} ref={provided.innerRef} index = {`${col + row}`}>
        <div></div>
        {provided.placeholder}
        {/* <div id={row.toString() + "-" + col.toString()}>
        {row.toString() + "-" + col.toString()}<br></br>
        <div id={row.toString() + "-" + col.toString()}>

        
        </div>
      </div> */}
      </div>
    )}
  </Droppable>
  )
}

export default GridItem