import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { PlanetContext } from './App'

const Home = ({primaryData}) => {

    return (
        <>
            {console.log("render de la map")}
            <div id="map">
                <div>Home</div>
                {Object.entries(primaryData).map(([key, value]) => 
                    <Link key={`icon-${key}`} to={`/planets/${key}`}>{value.name}</Link>
                )}
            </div>
        </>
    )
}

export default memo(Home)

