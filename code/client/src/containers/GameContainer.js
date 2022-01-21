import React,{useEffect, useState} from 'react';
import GameGrid from '../components/GameGrid';
import GridItem from '../components/GridItem';
import {getData} from '../GameService'

function GameContainer() {

const [data, setData] = useState({})
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
  .then(data => setData(data))
}, [gridState])

  const delay = ms => new Promise((res) => setTimeout(res,ms))
  

  const getCards = async() => {
    await delay(2000)
    // console.log(data[0])
    const cardData = data[0].cards.tile_cards
    // console.log(cardData)
    setCards(cardData)
  }

  const placeCard = async() => {
    await delay(5000)
    const tempArr = gridState
    tempArr[0].splice(0, 1, cards["start-card"])
    setGridState(tempArr)
  }

  getCards()
  .then(placeCard())


  return <div className= "game-container">
  <p>This is game container</p>
  <GameGrid  gridState={gridState}/>
 

  </div>;
}

export default GameContainer;
