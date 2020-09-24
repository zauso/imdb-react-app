import React, {useState, useCallback, useEffect} from 'react'
import { connect } from 'react-redux'
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import MovieCard from '../components/MovieCard'
import * as api from '../utils/imdb-api.js';
import { prepareMovie } from '../utils'

function Visited(props){
	const { movies } = props;
	const [visitedMovies, setVisitedMovies] = useState([]);
	useEffect(()=>{
		movies.map((movieIds, index)=>{
			api.get(`movie/${movieIds}`).then((result)=>{
				setVisitedMovies(prevState => [...prevState, prepareMovie(result.data)])
			})
		})
	},[])

	return (
		<Container>
			<h2>Visited movies</h2>
            <Grid container spacing={2}>
            {
	                visitedMovies.map((movie, i)=>{
		                    return (<Grid item md={3}>
						              <MovieCard
						                  key={i} 
						                  title={movie.title} 
						                  imgUrl={movie.posterImageUrl} 
						                  id={movie.id}
						                  info={movie.releaseYear}
						                  vote={movie.voteAverage}
						              />
		                            </Grid>
		                    )
	                })
            }
        </Grid>
		</Container>
	)
}

const mapStateToProps = (state) => {
  return {
    movies: state.userReduser.movies,
  }
}
const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Visited);
