import React , {useState,useEffect} from 'react'
import { WeatherCard } from '../../components/WeatherCard'
import axios from 'axios'
import {API_KEY,CLIM_URL,ciudad} from '../../services/index'


export const Weather =()=>{


const [clima, setclima] = useState([{temperature:'',
city:'',
country:''}])

useEffect(() => {
    axios.get(CLIM_URL + 'q=' + ciudad + '&appid=' + API_KEY + '&units=metric')
    .then(resolve=>{
        setclima({
            temperature: resolve.data.main.temp,
            city:resolve.data.name,
            country:resolve.data.sys.country
        })
    })

    })
    
    return(
        <div>
<WeatherCard {...clima}/>
   </div>
    )
}

