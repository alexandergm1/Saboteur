import React,{useEffect, useState} from 'react';
import GameGrid from '../components/GameGrid';
import Loading from '../components/Loading';

import {getData} from '../GameService'

function GameContainer() {
  
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true)
  const [clickToggle, setClickToggle] = useState(false)
  const [cards, setCards] = useState(null)
  const [deck, setDeck] = useState([])
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
    buildDeck();
  }, [data, clickToggle])
  


  const buildDeck = () => {
    const deck = []
    const cardData = Object.values(data.cards.tile_cards)
    console.log(cardData)
    for (let step = 0; step < 5; step++){
      for (let card of cardData)
        deck.push(card)
    }
    // Shuffle deck
    let currentIndex = deck.length,  randomIndex
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [deck[currentIndex], deck[randomIndex]] = [
        deck[randomIndex], deck[currentIndex]];
    }
    setDeck(deck)
  }

  const getCards = () => {
    const cardData = data.cards.tile_cards
    setCards(cardData)
  }


  const placeCard = () => {
    const row = Math.floor(Math.random()*6);
    const col = Math.floor(Math.random()*10);
    const tempArr = gridState
    tempArr[row].splice(col, 1, deck[0])
    setGridState(tempArr)
    setClickToggle(!clickToggle)
  }

  // const setupNewGame = () => {
  //   // getCards()
  //   setLoading(false);
  // }

  const handleStartClick = () => {
    console.log('starting game')
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
