import React from 'react';

function Card ({id, image, title}){
    return (
        <div className="card" id={id}>
            <img className='cardimage' src={image} alt='Logement'/>
            <span className='cardtitle'>{title}</span>
        </div>
    )
}

export default Card;