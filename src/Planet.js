import React from 'react';

const Planet = ({ data }) => {
    console.log("In one", data)
    const { name, climate } = data
    return (
        <div>
            <h1>{name}</h1>
            <h2>{climate}</h2>
            <p></p>
        </div>
    )
}

export default Planet;
