import React from 'react';

const Player = ({playerName, score}) => {
    return (
        <div id='player'>
            <h4>{playerName}</h4>
            <h4>Score: {score}</h4>
        </div>
    );
};

export default Player;