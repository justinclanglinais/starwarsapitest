import React from 'react';

const Planet = ({ name, population }) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>{population}</p>
        </div>
    )
}

export default Planet;
