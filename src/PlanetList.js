import React from 'react'
import Planet from './Planet'

const PlanetList = ( {planets} ) => {
    return (
        {
            planets.map ( (planet, id) => {
                return (
                    <div>
                        <Planet planet={planet} key={id} />
                    </div>
                )
            })
        }
    )
}
export default PlanetList;