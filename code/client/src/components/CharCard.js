import React from 'react';

const CharCard = ({char}) => {
    return (
        <div id='char-card-wrapper'>
            <div className = "card" style={{backgroundImage: `url(${char.image_url})`, backgroundSize: 'cover'}} ></div>
        </div>
    );
};

export default CharCard;