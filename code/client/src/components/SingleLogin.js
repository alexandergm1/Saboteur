import React from 'react';

const SingleLogin = ({handleEnterClick}) => {

    const buttonClick = (event) => {
        const name =  document.getElementById('player-name').value
        const val = event.target.value;
        const room = 1;
        handleEnterClick(name, val, room);
    }
    return (
        <div className='splash-container'>
            <div className='content'> 
                    <div className='button-wrapper'>
                        <input id='player-name' placeholder='Enter Player Name'/>
                        <button onClick={buttonClick} className='single' value='single'>To The Mines</button>
                    </div>
            </div>
        </div>
    );
};

export default SingleLogin;