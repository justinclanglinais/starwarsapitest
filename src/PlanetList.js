import React from 'react'
import Planet from './Planet'

const PlanetList = ({planets}) => {
        return (
            planets.map((aplanet, i) => {
                return (
                    <Planet data={aplanet} key={i} />
                )
            })
        )
}

export default PlanetList;