import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import fetchData from './canvas/fetchData'
import { useContext } from 'react'
import { PlanetContext } from './App'
import planets from './planets'

const PlanetPopUp = () => {

    const [planetsData, setPlanetsData] = useContext(PlanetContext)
    const {planet}= useParams()
    const [planetInfo, setPlanetInfo] = useState(false)
    const [chosenDay, setChosenDay] = useState(0)

    useEffect(() => {
        !planetsData.planets[planet].currentWeather && fetchData(Object.values(planetsData.planets).find(val => val).coords)
            .then(data => {
                console.log(data)
                setPlanetInfo(data)
                setPlanetsData({planets : {...planetsData.planets, [planet] : {...planets[planet], currentWeather: data}}})
                chosenDay !== 0  && setChosenDay(0)
            })
    }, [planet])

    return (
        <>
            <div id="planetPopUp">Voici les informations sur <br></br>{planet}
                {!planetInfo ? 
                    <p>...loading</p> : 
                    <>
                        <div>
                            {planetInfo.daily.weathercode.map((_, index) => 
                                <button key={`planetInfo-day-${index}`} onClick={() => setChosenDay(index)}>{index}</button>    
                            )}
                        </div>
                        <div>Le code du temps pour le jour {chosenDay} est : <br></br>
                            {planetInfo.daily.weathercode[chosenDay]}
                        </div>
                    </>
                }
            </div>
            {console.log("render du Planet Pop Up")}
        </>
    )
}

export default PlanetPopUp