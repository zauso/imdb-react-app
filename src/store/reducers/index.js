import { combineReducers } from 'redux'
import loadData from './load-data.js'
import loadMovies from './loadMovie.js'
import popularMovies from './popularMovie.js'
import upcomingMovies from './upcomingMovies.js'
import topratedMovies from './topratedMovies.js'
import searchMovies from './search.js'
import userReduser from './user.js'
import errors from './errors.js'
export default combineReducers({
	loadData,
	loadMovies,
	popularMovies,
	upcomingMovies,
	topratedMovies,
	searchMovies,
	userReduser,
	errors
})