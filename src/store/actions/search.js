
import * as api from '../../utils/imdb-api.js'
import { prepareMovies, deleteEmptyMovies } from '../../utils'

import { SEARCH_MOVIES_REQUEST,
 		 SEARCH_MOVIES_SUCCESS,
 		 SEARCH_MOVIES_FAIL,
 		 SEARCH_MOVIES_CANCEL } from '../types'

export const searchMovieRequest = () => {
  return {
    type: SEARCH_MOVIES_REQUEST
  };
};

export const searchMoviesCancel = () => {
	return {
		type: SEARCH_MOVIES_CANCEL
	}
}

export const searchMovieFail = (error) => {
  return {
    type: SEARCH_MOVIES_FAIL,
    error: error
  };
};

export const searchMovieSuccess = data => {
  return {
    type: SEARCH_MOVIES_SUCCESS,
    payload: prepareMovies(deleteEmptyMovies(data.data.results))
  };
};

export const searchMovies = param => {
	return dispatch => {
		dispatch(searchMovieRequest());
		api.get('search/movie', param)
			.then((value)=>{
				dispatch(searchMovieSuccess(value));
			})
			.catch((err)=>{
				if(err.__CANCEL__){
					dispatch(searchMoviesCancel())
				}else{
					dispatch(searchMovieFail(err))
				}
			})
	}
}
