import React from 'react'
import Planet from './Planet'

const PlanetList = ( planets ) => {
    
    return (
        <div>
            {planets.map (p=> {
                <Planet planet={p} key={p.id}/>
            })}
        </div>
    )
}

export default PlanetList;