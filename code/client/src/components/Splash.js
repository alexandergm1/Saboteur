import React, { Component } from 'react';

class Splash extends Component {
    render() {
        return (
            <div className='splash'>
                <div className='menu-container'>
                    <button id='single'>Single Player vs CPU</button>
                    <button id='host'>Host Multiplayer</button>
                    <button id='join'>Join Multiplayer</button>
                    <button id='rules'>How to play</button>
                </div>
            </div>
        );
    }
}

export default Splash;