import { GENRES_FETCH_REQUEST,
 		 GENRES_FETCH_SUCCESS,
 		 GENRES_FETCH_FAIL } from '../types'

const initialState = {
	loading: false,
	loaded: false,
	error: false,
	genres: {}
}

export default function genres(state = initialState, action){
	switch(action.type){
		case GENRES_FETCH_REQUEST:
			return Object.assign({}, state, {
				loading: true,
				error: false
			})
		case GENRES_FETCH_SUCCESS:
			return Object.assign({}, state, {
				genres: action.payload.genres,
				loading: false,
				loaded: true,
				error: false
			})
		case GENRES_FETCH_FAIL:
			return Object.assign({}, state, {
				loading: false,
				error: true
			})
		default:
			return state
	}
}