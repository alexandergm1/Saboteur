import React,{useEffect, useState} from 'react';
import GameGrid from '../components/GameGrid'
import HandList from '../components/HandList';
import SideBar from '../components/SideBar';
import Loading from '../components/Loading';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'

import {getData} from '../services/FetchService'
import {handleOnDragEnd} from '../services/GameService'

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

  const legalMove = (cardSelected, gridRow, gridCol) => {
    if (Object.keys(gridState[gridRow][gridCol]).length !== 0) return console.log("Card already placed here!")
    else return true
  } 

  function handleOnDragEnd(result){
    if (!result.destination) return
    else if (result.destination.droppableId === "discard"){
      const items = Array.from(playerHand)
      items.splice(result.source.index, 1)
      reorderHand(items) 
      return
    }
    else if (result.destination.droppableId === "cards"){
      const items = Array.from(playerHand)
      const [reorderedItem] = items.splice(result.source.index, 1)
      items.splice(result.destination.index, 0, reorderedItem)
      reorderHand(items)
      return
    }
    else if (result.destination.droppableId.substring(0, 4) === "grid"){
      const cardBeingPickedUp = playerHand[result.source.index]
      const row = result.destination.droppableId.substring(5,6)
      const col = result.destination.droppableId.substring(7)
      if (legalMove(cardBeingPickedUp, row, col) === true){
        const tempArr = gridState
        tempArr[row].splice([col], 1, playerHand[result.source.index])
        setGridState(tempArr)
        //Discard from hand
        const items = Array.from(playerHand)
        items.splice(result.source.index, 1)
        reorderHand(items)
      } 
        return
    }
  }

    return (
      <div className= "game-container">

        <DragDropContext onDragEnd= {handleOnDragEnd}>

          <GameGrid  gridState={gridState}/>   
          <HandList cards={playerHand} reorderHand = {reorderHand}/> 
          <SideBar deck={deck} startClick={handleStartClick}/>

        </DragDropContext>
        
      </div>
    )
}

export default GameContainer;

