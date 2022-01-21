import React,{useEffect, useState} from 'react';
import GameGrid from '../components/GameGrid';
import GridItem from '../components/GridItem';

function GameContainer() {

const [gridState, setGridState] = useState([
    [ {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [ {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}], 
    [ {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}], 
    [ {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}], 
    [ {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}], 
    [ {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}], 
    [ {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]    
])



  return <div className= "game-container">
  <p>This is game container</p>
  <GameGrid  gridState={gridState}/>
 

  </div>;
}

export default GameContainer;
