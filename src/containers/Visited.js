import React, {useState, useCallback, useEffect} from 'react'
import { connect } from 'react-redux'
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import MovieCard from '../components/MovieCard'
import * as api from '../utils/imdb-api.js';

function Visited(props){
	const { movies } = props;
	const [visitedMovies, setVisitedMovies] = useState([]);
	useEffect(()=>{
		movies.map((movieIds, index)=>{
			api.get(`movie/${movieIds}`).then((result)=>{
				setVisitedMovies(prevState => [...prevState,{ 					
					id: movieIds,
					titel: result.data.original_title,
					poster_path: result.data.poster_path
				}])
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
		                                <MovieCard key={i} titel={movie.titel} 
		                                        img={movie.poster_path} 
		                                        src={movie.id}
		                                        info={5} 
		                                        vote={6}
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
