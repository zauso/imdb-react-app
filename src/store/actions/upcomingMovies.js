import * as api from '../middlewares/imdb-api.js';
import { prepareMovies } from '../../utils'

import { UPCOMING_MOVIES_FETCH_REQUEST,
 		 UPCOMING_MOVIES_FETCH_SUCCESS,
 		 UPCOMING_MOVIES_FETCH_FAIL } from '../types'

export const fetchUpcomingRequest = () => {
  return {
    type: UPCOMING_MOVIES_FETCH_REQUEST
  };
};

export const fetchUpcomingFail = (error) => {
  return {
    type: UPCOMING_MOVIES_FETCH_FAIL,
    error: error
  };
};

export const fetchUpcomingSuccess = result => {
  return {
    type: UPCOMING_MOVIES_FETCH_SUCCESS,
    payload: {
      movies: prepareMovies(result.data.results),
    	page: result.data.page
    }
  };
};

export const fetchUpcomingMovies = () => {
	return (dispatch, getState) => {
		let page = getState().upcomingMovies.page + 1
		dispatch(fetchUpcomingRequest());
			api.get('/movie/upcoming', {'page': page})
				.then((value)=>{
					dispatch(fetchUpcomingSuccess(value));
				})
				.catch((err)=>{
					dispatch(fetchUpcomingFail(err))
				})
	}
}