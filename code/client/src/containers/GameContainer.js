import React,{useEffect, useState} from 'react';
import GameGrid from '../components/GameGrid';
import Loading from '../components/Loading';

import {getData} from '../GameService'

function GameContainer() {
  
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true)
  const [cards, setCards] = useState([])
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
  }, [gridState])

  // getData()
  // .catch(e => console.log(e))
  // .finally(() => {isLoading = false})
  // .then(data => setData(data))

  const getCards = () => {
    // return new Promise((resolve, reject) => {
    //   if(data.cards.tile_cards){
    //     resolve(setCards(data.cards.tile_cards))
    //   } else {
    //     reject(new(Error("Data failed to load")))
    //   }
    // })
    const cardData = data.cards.tile_cards
    setCards(cardData)
  }

  const placeCard = () => {
    const tempArr = gridState
    tempArr[0].splice(0, 1, cards['start-card'])
    setGridState(tempArr)
  }

  const setupNewGame = () => {
    getCards()
    setLoading(false);
  }

  const handleStartClick = () => {
    console.log('starting game')
    placeCard()
  }

  if((loading)){
    return <div className= "game-container">
      <Loading setupNewGame={setupNewGame}/>
    </div>;
  }
  else{
    return (
      <div className= "game-container">
        <GameGrid  gridState={gridState}/>
        <button onClick={handleStartClick}>Start Game</button>
      </div>
    )
  }
}

export default GameContainer;
