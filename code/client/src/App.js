import React, {useState, useEffect} from 'react';
import './App.css';
import './css/component_css/GameGrid.css'
import './css/component_css/GameContainer.css'
import './css/component_css/Card.css'
import './css/component_css/GridItems.css'
import './css/component_css/HandList.css'
import './css/component_css/SideBar.css'
import './css/component_css/SplashContainer.css'
import {getCPUPlayers, setUpCPUPlayers} from './services/GameService'
import SplashContainer from './containers/SplashContainer';
import GameContainer from './containers/GameContainer';

function App() {

  const [enterGame, setEnterGame] = useState(false);
  const [player, setPlayer] = useState(null);
  const [playerObjects, setPlayerObjects] = useState(null);
  const [gameType, setGameType] = useState(null);
  const [roomID, setRoomID] = useState(null)

  const handleEnterClick = (player, game, room) => {
      const players = getCPUPlayers(player);
      const playerObjects = setUpCPUPlayers(players)
      setPlayer(player.replace(/\s/g, ''))
      setPlayerObjects(playerObjects);
      setGameType(game);
      setRoomID(room);
      setEnterGame(true);
  }

  if(!enterGame){
    return <SplashContainer handleEnterClick={handleEnterClick}/>
  } else {
    return <GameContainer player={player} playerObjects={playerObjects} gameType={gameType} roomID={roomID}/>
  }
}

export default App;
