import { POPULAR_MOVIES_FETCH_REQUEST,
 		 POPULAR_MOVIES_FETCH_SUCCESS,
 		 POPULAR_MOVIES_FETCH_FAIL } from '../types'

const initialState = {
	page: 0,
	movies: [],
	loading: false,
	error: false
}

export default function popularMovies(state = initialState, action){
	//console.log(action.payload.page)
	switch(action.type){
		case POPULAR_MOVIES_FETCH_REQUEST:
			return Object.assign({}, state, {
				loading: true,
				error: false
			})
		case POPULAR_MOVIES_FETCH_SUCCESS:
			return Object.assign({}, state, {
				movies: [...state.movies, ...action.payload.movies],
				page: state.page+1,
				loading: false,
				error: false
			})
		case POPULAR_MOVIES_FETCH_FAIL:
			return Object.assign({}, state, {
				loading: false,
				error: true
			})
		default:
			return state
	}
}