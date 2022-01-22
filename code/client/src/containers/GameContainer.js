import React,{useEffect, useState} from 'react';
import GameGrid from '../components/GameGrid';
import Loading from '../components/Loading';

import {getData} from '../GameService'

function GameContainer() {
  
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true)
  const [clickToggle, setClickToggle] = useState(false)
  const [cards, setCards] = useState(null)
  const [gridState, setGridState] = useState([
      [ {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
      [ {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}], 
      [ {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}], 
      [ {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}], 
      [ {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}], 
      [ {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}], 
      [ {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]    
  ])

  useEffect (() => {
    getData()
    .then(data => setData(data[0]))
  },[])
  
  useEffect(() => {
    if(Object.keys(data).length === 0) return 
    getCards();
  }, [data, clickToggle])
  
  const getCards = () => {
    const cardData = data.cards.tile_cards
    console.log(`card data: ${cardData}`)
    setCards(cardData)
  }

  const placeCard = () => {
    const row = Math.floor(Math.random()*7);
    const col = Math.floor(Math.random()*11);
    const tempArr = gridState
    tempArr[row].splice(col, 1, cards['start-card'])
    setGridState(tempArr)
    setClickToggle(!clickToggle);
  }

  const handleStartClick = () => {
    if(!cards) return
    placeCard()
  }

  // if((loading)){
  //   return <div className= "game-container">
  //     <Loading setupNewGame={setupNewGame}/>
  //   </div>;
  // }
  // else{
    return (
      <div className= "game-container">
        <GameGrid  gridState={gridState}/>
        <button onClick={handleStartClick}>Start Game</button>
      </div>
    )
  // }
}

export default GameContainer;
