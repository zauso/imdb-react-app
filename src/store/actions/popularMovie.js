import * as api from '../middlewares/imdb-api.js';

import { POPULAR_MOVIES_FETCH_REQUEST,
 		 POPULAR_MOVIES_FETCH_SUCCESS,
 		 POPULAR_MOVIES_FETCH_FAIL } from '../types'

export const fetchPopularRequest = () => {
  return {
    type: POPULAR_MOVIES_FETCH_REQUEST
  };
};

export const fetchPopularFail = (error) => {
  return {
    type: POPULAR_MOVIES_FETCH_FAIL,
    error: error
  };
};

export const fetchPopularSuccess = result => {
  return {
    type: POPULAR_MOVIES_FETCH_SUCCESS,
    payload: {
    	movies: result.data.results,
    	page: result.data.page
    }
  };
};

export const fetchPopularMovies = () => {
	return (dispatch, getState) => {
		let page = getState().popularMovies.page + 1
		dispatch(fetchPopularRequest());
			api.get('/movie/popular', {'page': page})
				.then((value)=>{
					dispatch(fetchPopularSuccess(value));
				})
				.catch((err)=>{
					dispatch(fetchPopularFail(err))
				})
	}
}