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
  const [gameState, setGameState] = useState(false)
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
  }, [data, clickToggle])
  
  useEffect(() => {
    if(gameState === true && Object.keys(data).length !== 0){
    buildDeck();
    placeStartCards()
    }
  }, [gameState])

  const buildDeck = () => {
    const deck = []
    const cardData = Object.values(data.cards.tile_cards)
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


  const placeStartCards = () => {
    const tempArr = gridState
    tempArr[3].splice(2, 1, data.cards.tile_cards[7])
    tempArr[1].splice(9, 1, data.cards.tile_cards[7])
    tempArr[3].splice(9, 1, data.cards.tile_cards[7])
    tempArr[5].splice(9, 1, data.cards.tile_cards[7])
    setGridState(tempArr)
  }

  // const setupNewGame = () => {
  //   // getCards()
  //   setLoading(false);
  // }

  const dealHand = () => {
    let tempArr = deck
    const hand = tempArr.splice(0,5)
    setPlayerHand(hand)
    setDeck(tempArr)
  }

  const handleStartClick = () => {
    if(!data) return
    dealHand();
    setGameState(true);
    setClickToggle(!clickToggle);

  }

  const reorderHand = (hand) => {
    setPlayerHand(hand)
  }

  // if((loading)){
  //   return <div className= "game-container">
  //     <Loading setupNewGame={setupNewGame}/>
  //   </div>;
  // }
  // else{
    return (
      <div className= "game-container">
        <div className='main-container'>
          <GameGrid  gridState={gridState}/>
          <button onClick={handleStartClick}>Start Game</button>
        <div className="hand-container">
          <HandList cards={playerHand} reorderHand = {reorderHand}/>
        </div>
        </div>
        <div className='menu-container'>
          <div id='deck'>deck<br></br>cards remaining:{deck.length} </div>
        </div>
      </div>
    )
  // }
}

export default GameContainer;

