export const windowScrollTop = () => {
	window.scrollTo(0, 0)
}

export const prepareImage = (url, size = 'w500') => {
	if(!url) return null
	return `https://image.tmdb.org/t/p/${size}${url}`
}

export const prepareMovie = (movie) => {
	return {
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        genres: movie.genres ? movie.genres.map(i => i.name) : null,
        genreIds: movie.genre_ids,
        voteAverage: movie.vote_average,
        legend: movie.tagline,
        duration: movie.runtime,
        budget: movie.budget,
        releaseYear: new Date(movie.release_date).getFullYear(),
        posterImageUrl: prepareImage(movie.poster_path),
        backdropImageUrl: prepareImage(movie.backdrop_path),
        popularity: movie.popularity
    }
} 

export const prepareMovies = (movies) => {
	return movies.map((movie) => {
		return prepareMovie(movie)
	})
}

export const deleteEmptyMovies = (movies) => {
    return movies.filter(movie => {
        return !!movie.title && !!movie.poster_path && movie.popularity > 0.25
    })
}
