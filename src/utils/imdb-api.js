 
import axios from "axios"

const API_KEY = "e0d3d49d19ce926b6842e10c9d97ba31"

export function _get(url, params = {}) {
    let cancelToken = null;
    return (url, params = {}) =>{
        if(cancelToken){
            //cancelToken.cancel();
        }
        cancelToken = axios.CancelToken.source();
        return axios({
            baseURL: "https://api.themoviedb.org/3/",
            url: url,
            method: "get",
            cancelToken: cancelToken.token,
            params: Object.assign({},
                {
                    api_key: API_KEY,
                    language: "en-US"
                }, params
            ),
            timeout: 5 * 1000
        })
    }
}

export const get = _get();