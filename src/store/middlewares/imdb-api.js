 
import axios from "axios"

const API_KEY = "e0d3d49d19ce926b6842e10c9d97ba31"

export function get(url, params = {}) {
    return axios({
        baseURL: "https://api.themoviedb.org/3/",
        url: url,
        method: "get",
        params: Object.assign({},
            {
                api_key: API_KEY,
                language: "en-US"
            }, params
        ),
        timeout: 5 * 1000
    })
}