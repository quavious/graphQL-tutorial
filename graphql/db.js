import fetch from "node-fetch"

let apiUrl = "https://yts.am/api/v2/list_movies.json?"

export const getMovies = (limit, rating) => {
    let requestUrl = apiUrl;
    if(limit>0){
        requestUrl += `limit=${limit}`
    }
    if(rating>0){
        requestUrl += `&minimum_rating=${rating}`
    }
    return fetch(requestUrl)
    .then(res => res.json())
    .then(json => json.data.movies)
}

