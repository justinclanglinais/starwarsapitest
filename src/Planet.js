import React from 'react';
import 'tachyons';


const Planet = ({ data }) => {
    console.log("In one", data)
    const { name, climate } = data
    return (
        <div className="bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5">
            <h2>{name}</h2>
            <h4>Climate: {climate}</h4>
            <p></p>
        </div>
    )
}

export default Planet;
