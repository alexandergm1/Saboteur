import React from 'react';

const Loading = ({setupNewGame}) => {

    const handleClick = () => {
        setupNewGame();
    }

    return (
        <div>
            <button onClick={handleClick} id='start-button' value="Start Game">Enter</button>
        </div>
    );
};

export default Loading;