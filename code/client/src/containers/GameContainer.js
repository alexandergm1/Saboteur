import React,{useEffect, useState} from 'react';
import GameGrid from '../components/GameGrid';
import HandList from '../components/HandList';
import Loading from '../components/Loading';
import '../css/GameContainer.css'

import {getData} from '../GameService'

function GameContainer() {
  
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true)
  const [clickToggle, setClickToggle] = useState(false)
  const [cards, setCards] = useState(null)
  const [playerHand, setPlayerHand] = useState([])
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
    getCards();
    buildDeck();
    dealHand()
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
    console.log(`card data: ${cardData}`)
    setCards(cardData)
  }


  const placeCard = () => {
    const row = Math.floor(Math.random()*6);
    const col = Math.floor(Math.random()*10);
    const tempArr = gridState
    tempArr[row].splice(col, 1, cards[7])
    setGridState(tempArr)
    setClickToggle(!clickToggle);
  }

  // const setupNewGame = () => {
  //   // getCards()
  //   setLoading(false);
  // }

  const dealHand = () => {
    const cardData = Object.values(data.cards.tile_cards).splice(0,5)
    setPlayerHand(cardData)
  }

  const handleStartClick = () => {
    const row = Math.floor(Math.random()*7);
    const col = Math.floor(Math.random()*11);
    const tempArr = gridState
    tempArr[row].splice(col, 1, deck[0])
    setGridState(tempArr)
  setClickToggle(!clickToggle);
  }


  const handleStartClick = () => {
    console.log('starting game')
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
        <div className="hand-container">
          <HandList cards={playerHand}/>
        </div>
        <div className='menu-container'>
          <h2>Menu Container</h2>
        </div>
      </div>
    )
  // }
}

export default GameContainer;

