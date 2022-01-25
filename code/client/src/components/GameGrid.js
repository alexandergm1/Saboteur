import React from 'react';
import GridItem from './GridItem';


function GameGrid({gridState}) {

        const gridNodes = gridState.map((row, rowIndex) => {
          return row.map((item, colIndex) => {
              return (<GridItem  row = {rowIndex} col={colIndex} item={item} key = {rowIndex.toString() + colIndex.toString()}/>)
          })
        })
    

  return <div className = "game-grid">
  
  {gridNodes}

  </div>;
}

export default GameGrid;
