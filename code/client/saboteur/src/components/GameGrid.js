import React from 'react';
import GridItem from './GridItem';


function GameGrid({gridState}) {
    const gridNodes = gridState.map((row, rowIndex) => {
        return row.map((item, colIndex) => {
            return <GridItem  row = {rowIndex} col={colIndex}/>
        })

    })

  return <div className = "game-grid">
  <p> game grid</p>
  {gridNodes}

  </div>;
}

export default GameGrid;
