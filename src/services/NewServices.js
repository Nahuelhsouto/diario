import API from "./config";
import NEWS_ENDPOINT from './endpoints'

const NewService ={
  getAll:()=> new Promise
  (function(resolve, reject)=> {
API.get(NEWS_ENDPOINT.TOP_HEADLINES)
.then(
  res=> data.data.news
)
.then(
  data=> resolve(data)
)
.catch(
  err=>reject(err)
)
  })
}

export default NewService
