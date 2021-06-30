import axios from "axios";

const BASE_URL = "https://newsapi.org/v2/";

export const API = axios.create({
  baseURL: BASE_URL
});

/*api key =ae8a7e87d10a476eb72a996183a7cb93*/



// CLIMA URL

export const CLIM_URL = 'https://api.openweathermap.org/data/2.5/weather?'
export const API_KEY = 'd9cba45d303cc8729baabad53f68d7fe'
export const ciudad = 'Buenos Aires,ar'

