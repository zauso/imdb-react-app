import * as api from '../middlewares/imdb-api.js';

import { GENRES_FETCH_REQUEST,
 		     GENRES_FETCH_SUCCESS,
 		     GENRES_FETCH_FAIL } from '../types'

export const fetchGenresRequest = () => {
  return {
    type: GENRES_FETCH_REQUEST
  };
};

export const fetchGenresFail = (error) => {
  return {
    type: GENRES_FETCH_FAIL,
    error: error
  };
};

export const fetchGenresSuccess = data => {
  let genres = {};
  for (let genre of data.genres) {
    genres[genre.id] = genre.name
  }
  return {
    type: GENRES_FETCH_SUCCESS,
    payload: {
      genres: genres
    }
  };
};

export const fetchGenres = () => {
  return (dispatch) => {
		dispatch(fetchGenresRequest());
			api.get('/genre/movie/list')
				.then((result)=>{
					dispatch(fetchGenresSuccess(result.data));
				})
				.catch((err)=>{
					dispatch(fetchGenresFail(err))
				})
  }
}