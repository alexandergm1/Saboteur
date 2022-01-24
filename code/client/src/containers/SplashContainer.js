import React, { Component } from 'react';

class SplashContainer extends Component {
    render() {
        return (
            <div className='splash-container'>
                <div className='splash-menu'>
                    <div className='button-wrapper'>
                        <button className='single'>Single Player vs CPU</button>
                        <button className='host'>Host Multiplayer</button>
                        <button className='join'>Join Multiplayer</button>
                        <button className='rules'>How to play</button>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default SplashContainer;