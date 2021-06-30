
import axios from 'axios'
import {API_KEY,CLIM_URL} from './index'

export const getClima = (ciudad) =>{


    axios.get(CLIM_URL + 'q=' + ciudad + '&appid=' + API_KEY + '&units=metric')
    .then(resolve=>{
        console.log(resolve.data)
    })
}

