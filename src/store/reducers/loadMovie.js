
const initState = {
	'page': 0,
	'movies': [],
	'loading': false
}

const loadMovies = (state = initState, action) => {
	switch (action.type){
		case 'LOAD_MOVIES':
			console.log('LOAD_MOVIES_ACTION')
			return {
				...state,
				movies: [...state.movies, ...action.payload.movies],
				loading: true
			}
	    default:
      		return state
	}
}

export default loadMovies

