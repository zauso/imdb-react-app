import { combineReducers } from 'redux'
import popularMovies from './popularMovie.js'
import upcomingMovies from './upcomingMovies.js'
import topratedMovies from './topratedMovies.js'
import searchMovies from './search.js'
import userReduser from './user.js'
import genres from './genres.js'
import errors from './errors.js'

export default combineReducers({
	popularMovies,
	upcomingMovies,
	topratedMovies,
	searchMovies,
	userReduser,
	genres,
	errors
})