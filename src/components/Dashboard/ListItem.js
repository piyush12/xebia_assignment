import React from 'react'

export const ListItem = ({planet,index}) => {
    const population = planet.population > 10000 ? <strong>${planet.population}</strong> : planet.population;
    return (
        <li className="list-group-item">
            {planet.name}  {population}
        </li>
    )
}
