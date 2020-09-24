import * as api from '../middlewares/imdb-api.js';
import { prepareMovies } from '../../utils'

import { TOPRATED_MOVIES_FETCH_REQUEST,
 		 TOPRATED_MOVIES_FETCH_SUCCESS,
 		TOPRATED_MOVIES_FETCH_FAIL } from '../types'

export const fetchTopratedRequest = () => {
  return {
    type: TOPRATED_MOVIES_FETCH_REQUEST
  };
};

export const fetchTopratedFail = (error) => {
  return {
    type: TOPRATED_MOVIES_FETCH_FAIL,
    error: error
  };
};

export const fetchTopratedSuccess = result => {
  return {
    type: TOPRATED_MOVIES_FETCH_SUCCESS,
    payload: {
      movies: prepareMovies(result.data.results),
    	page: result.data.page
    }
  };
};

export const fetchTopratedMovies = () => {
	return (dispatch, getState) => {
		let page = getState().topratedMovies.page + 1
		dispatch(fetchTopratedRequest());
			api.get('/movie/top_rated', {'page': page})
				.then((value)=>{
					dispatch(fetchTopratedSuccess(value));
				})
				.catch((err)=>{
					dispatch(fetchTopratedFail(err))
				})
	}
}