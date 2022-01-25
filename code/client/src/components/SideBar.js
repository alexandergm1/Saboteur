import React from 'react';
import Player from './Player';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'

const SideBar = ({deck, startClick, players}) => {
    const playerNodes = players.map((player, index) => {
        return <Player playerName={player.name} score={player.score} key={index}/>
    })

    const handleClick = () => {
        startClick();
    }

    return (
        <div className='menu-container'>
            <div className='deck-container'>
                <div id='deck'>{deck.length} </div> 
                <div id='deck'>{deck.length} </div> 
                <div id='deck'>{deck.length} </div> 
            </div>
            <div className='player-container'>
                {playerNodes}
            </div>
            <div className='button-container'>
                <button className='start' onClick={handleClick}>Start Game</button> 
            </div>
        </div>
    );
};

export default SideBar;