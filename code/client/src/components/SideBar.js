import React from 'react';
import Player from './Player';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'

const SideBar = ({deck, charDeck, backs, startClick, buttonToggle, players, playerTurn}) => {
    const playerNodes = players.map((player, index) => {
        return <Player playerName={player.name} score={player.score} key={index} playerTurn={playerTurn} index ={player.index}/>
    })

    const handleClick = () => {
        startClick();
    }

    return (
        <div className='menu-container'>
            <div className='deck-container'>
                <div id='deck' style={{backgroundImage: `url(${backs.deck_back.image_url})`, backgroundSize: 'cover'}}>{deck.length} </div> 
                <div id='deck' style={{backgroundImage: `url(${backs.character_back.image_url})`, backgroundSize: 'cover'}}>{charDeck.length} </div> 
                <div id='deck' style={{backgroundImage: `url(${backs.nugget_back.image_url})`, backgroundSize: 'cover'}}>28</div> 
            </div>
            <div className='player-container'>
                {playerNodes}
            </div>
            <div className='button-container'>
                <button className='start' onClick={handleClick}>{buttonToggle ? "Leave Game" : "Start Game"}</button> 
            </div>
        </div>
    );
};

export default SideBar;