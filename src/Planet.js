import React from 'react';

const Planet = ({ planet, population }) => {
    return (
        <div>
            <h1>Name</h1>
            <h2>{planet}</h2>
            <p>{population}</p>
        </div>
    )
}

export default Planet;
