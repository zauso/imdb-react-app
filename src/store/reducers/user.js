import { USER_VISITED_MOVIE } from '../types'

const initialState = {
	movies: JSON.parse(localStorage.getItem('visitedMovies')) || []
}

export default function userReduser(state = initialState, action){
	console.log("Add in visited movies")
	const {type, id} = action;
	switch(type){
		case USER_VISITED_MOVIE:
			let visitedMovies = [...new Set([...state.movies, id])]
			localStorage.setItem('visitedMovies', JSON.stringify(visitedMovies))
			return Object.assign({}, state, {
				movies: visitedMovies
			})
		default:
			return state
	}

}