import React from 'react';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
function GridItem({row, col, item}) {
  return (
    <Droppable droppableId={"grid" + "-" + `${row}` + "-" + `${col}`} renderClone ={true}>
      {(provided, snapshot) => (
        <div className = "grid-card" style={{backgroundImage: item.flipped ? `url(${item.back_url})` : `url(${item.image_url})`, backgroundSize: 'cover', transform: item.inverted ? 'rotate(180deg)': null, backgroundColor:  snapshot.isDraggingOver ? "#DCDCDC" : null}}{...provided.droppableProps} ref={provided.innerRef}  index = {`${col + row}`}>
        {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
}
export default GridItem