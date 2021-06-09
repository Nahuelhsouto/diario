import axios from "axios";

const BASE_URL = "https://newsapi.org/v2/";

const API = axios.create({
  baseURL: BASE_URL
});

export default API;
/*api key =ae8a7e87d10a476eb72a996183a7cb93*/
