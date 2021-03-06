import React from 'react';

const Player = ({playerName, score, playerTurn, index}) => {
    return (
        <div id='player' style = {{backgroundColor:  playerTurn.index === index ? "rgba(69, 245, 66, .6)"  : null}}>
            <div id='player-name-wrapper'><h4>{playerName}</h4></div>
            <div id='player-score-wrapper'><h4>Score: {score}</h4></div>
        </div>
    );
};

export default Player;