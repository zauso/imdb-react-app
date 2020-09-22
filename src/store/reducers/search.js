import { SEARCH_MOVIES_REQUEST,
 		 SEARCH_MOVIES_SUCCESS,
 		 SEARCH_MOVIES_FAIL,
 		 SEARCH_MOVIES_CANCEL } from '../types'

const initialState = {
    isFetching: false,
    foundMovies: [],
    error: false,
    cancel: false
}

export default function searchMovies(state = initialState, action){
	switch(action.type){
		case SEARCH_MOVIES_REQUEST:
			return Object.assign({}, state, {
				isFetching: true,
				error: false,
				cancel: false
			})
		case SEARCH_MOVIES_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				foundMovies: action.payload
			})
		case SEARCH_MOVIES_CANCEL:
			return Object.assign({}, state, {
				isFetching: false,
				cancel: true
			})
		case SEARCH_MOVIES_FAIL:
			return Object.assign({}, state, {
				isFetching: false,
				error: true
			})
		default:
			return state
	}
}