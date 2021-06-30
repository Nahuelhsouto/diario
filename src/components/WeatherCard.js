import React from 'react'

export const WeatherCard = props=>{

    return(
        <div>
<p>Temperatura:{props.temperature}</p>
<p>Pais:{props.country}</p>
<p>Ciudad:{props.city}</p>
        </div>
    )
}