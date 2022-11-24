import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import weatherIcon from './services/weatherIcon'
import Timezone from "./services/Timezone";
import planetData from "./services/planetData"
import Weathername from './services/WeatherName';
import CrossIcon from './CrossIcon';

const PlanetPopUp = ({ initial }) => {

    const {planet}= useParams()

    return (
        <>
            <div>
                <div className="popup">
                    <CrossIcon></CrossIcon>
                    <div className="pop-container">
                        <h2>Now on <br></br>{planet}</h2>
                        <img
                            src={weatherIcon(
                                initial[planet].weathercode[0],
                                "meteo-icon"
                            )}
                            alt="sun"
                        />
                        <div className="popUpItem" >{!initial[planet].weathercode[0] ? "SUNNY" : Weathername(
                            initial[planet].weathercode[0]
                        )}</div>
                        <div className="popUpItem" >{initial[planet].temperature_2m_max[0]} ° C</div>
                        <div className="popUpItem" >{Timezone(planetData[planet].timezone)}</div>
                        <Link to={`/planets/${planet}/details`}>
                            <button id="theButton">See {planet} info</button>
                        </Link>
                    </div>
                </div>
            </div>
            {console.log("render du Planet Pop Up")}
        </>
    )
}

export default PlanetPopUp