import React,{useEffect, useState} from 'react';
import GameGrid from '../components/GameGrid';
import Loading from '../components/Loading';

import {getData} from '../GameService'

function GameContainer() {
  
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true)
  const [gameActive, setGameActive] = useState(false)
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
    console.log(`data: ${data}`)
    getCards();
  }, [data, gameActive])
  
  const getCards = () => {
    const cardData = data.cards.tile_cards
    console.log(`card data: ${cardData}`)
    setCards(cardData)
  }

 useEffect(() => {
    if(!cards || gameActive == false) return
    console.log(cards)
    placeCard()
    setGameActive(false)
 }, [gameActive])

  const placeCard = () => {
    const row = Math.floor(Math.random()*6);
    const col = Math.floor(Math.random()*10);
    const tempArr = gridState
    tempArr[row].splice(col, 1, cards['start-card'])
    setGridState(tempArr)
  }

  // const setupNewGame = () => {
  //   // getCards()
  //   setLoading(false);
  // }

  const handleStartClick = () => {
    console.log('starting game')
    setGameActive(true);
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