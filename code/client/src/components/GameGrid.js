import React from 'react';
import GridItem from './GridItem';


function GameGrid({gridState}) {


    // const delay = ms => new Promise((res) => setTimeout(res,ms))
    // await delay(7000)

        const gridNodes = gridState.map((row, rowIndex) => {
        // console.log(row)
        return row.map((item, colIndex) => {
            console.log(item, rowIndex, colIndex)
            return (<GridItem  row = {rowIndex} col={colIndex} item={item} key = {rowIndex.toString() + colIndex.toString()}/>)
        })
        })
    

  return <div className = "game-grid">
  
  {gridNodes}

  </div>;
}

export default GameGrid;
