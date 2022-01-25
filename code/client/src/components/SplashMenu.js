import React from 'react';

const SplashMenu = ({handleClick}) => {

    const buttonClick = (event) => {
        handleClick(event.target.value);
    }
    return (
        <div className='splash-container'>
            <div className='content'>
                <div className='button-wrapper'>
                    <button onClick={buttonClick} className='single' value='single'>Single Player vs CPU</button>
                    <button onClick={buttonClick} className='host' value='host'>Host Multiplayer</button>
                    <button onClick={buttonClick} className='join' value='join'>Join Multiplayer</button>
                    <button onClick={buttonClick} className='rules' value='rules'>How to play</button>
                </div>
                
            </div>
        </div>
    );
};

export default SplashMenu;