import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import {useParams} from "react-router"
import Helmet from 'react-helmet';
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Rating from "@material-ui/lab/Rating"
import * as api from '../utils/imdb-api.js';
import {makeStyles} from "@material-ui/core/styles"
import MovieCard from '../components/MovieCard'

import { addVisitedMovie } from '../store/actions/user'

function prepareImage(url, size = 'w500') {
    // size = 'original'
    if (!url) return null
    return `https://image.tmdb.org/t/p/${size}${url}`
}

function prepareMovie(raw) {
    const basicData = {
        id: raw.id,
        title: raw.title,
        overview: raw.overview,
        genres: raw.genres ? raw.genres.map(i => i.name) : null,
        voteAverage: raw.vote_average,
        legend: raw.tagline,
        releaseDate: raw.release_date,
        posterImageUrl: prepareImage(raw.poster_path),
        backdropImageUrl: prepareImage(raw.backdrop_path),
        popularity: raw.popularity
    }
    

    return basicData;
}

const useStyles = makeStyles(theme => ({
    movieContainer: {
        paddingTop: 50,
        paddingBottom: 50,
        flexGrow: 1
    },
    backdrop: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        zIndex: -1,
        '&:after': {
            position: 'absolute',
            content: "''",
            display: 'block',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(30, 47, 60, 0.75)',
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(30, 47, 60, 0.75) 0%, rgba(48, 65, 78, 0.75) 100%)'
        }
    },
    backdropImage: {
        display: 'block',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    main: {
    	position: 'relative',
    },
    movieImage: {
    	width: '100%',
    	height: 'auto',
    	borderRadius: '4px',
    },
    genreList: {
        listStyle: 'none',
        padding: 0,
        display: 'flex',
        flexWrap: 'wrap',
    },
    genre: {
        cursor: 'pointer',
        padding: '1px 6px',
        marginRight: 10,
        border: '1px solid white',
        borderRadius: 4,
        fontSize: '10pt'
    },
    vote: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '12pt'
    },
    subtitle: {
        marginBottom: 8,
        fontSize: '13pt'
    },
    }));

function Movie(props){
    const { addVisitedMovie } = props;
	const classes = useStyles();
    const {id: urlId} = useParams()
	const [movie, setMovie] = useState([]);
    const [recommendMovies, setRecommendMovies] = useState([]);
    const [similarMovies, setSimilarMovies] = useState([]);
	const link = '/movie/'+urlId;
    const link2 = link+"/similar";
    const link3 = link+"/recommendations"

	useEffect(()=>{
        //if()
	api.get(link).then((result) => {
			console.log(result.data);
			setMovie(prepareMovie(result.data));
		})
	},[urlId]);
    useEffect(()=>{
        api.get(link2).then((result) => {
            setSimilarMovies(result.data.results.slice(0, 6))
        })
    },[urlId]);
    useEffect(()=>{
        api.get(link3).then((result) => {
            setRecommendMovies(result.data.results.slice(0, 6))
    })
    addVisitedMovie(urlId)
    },[movie.id]);

	return (
	(typeof movie.titel !== undefined) ?
		<>
	      <Helmet>
	        <title>{movie.title}</title>
	      </Helmet>
	      <div className={classes.main}>
	      <div className={classes.backdrop}>
	      		<img className={classes.backdropImage} src={movie.backdropImageUrl} alt={movie.title}/>
	      </div>
	      <Container className={classes.movieContainer}>
	      		<Grid container spacing={4}>
	      			<Grid item md={3} >
	      				<img className={classes.movieImage} src={movie.posterImageUrl} alt={movie.title}/>
	      			</Grid>
	      			<Grid item md={9} style={{color: '#fff'}}>
                        <Typography variant={"h4"} style={{fontWeight: 'bold'}} component={"h1"}>
                            {movie.title} <span style={{fontWeight: 300, fontSize: '28px'}}>({new Date(movie.releaseDate).getFullYear()})</span>
                        </Typography>
                        <ul className={classes.genreList}>
                            {movie.genres ? 
                            	movie.genres.map(genre => (
                                	<li className={classes.genre} key={genre}>{genre}</li>
                            	))
                        	:
                            	null
                            }
                        </ul>
                        <div className={classes.vote}>
                            <Rating value={movie.voteAverage / 2} readOnly/>
                            <span style={{margin: '2px 0px 0 6px'}}>{movie.voteAverage}/10</span>
                        </div>
                        <div style={{marginTop: 10}}>
                            <Typography component={"div"} style={{marginRight: 15}}>
                                <b>Duration:</b> {movie.duration} min.
                            </Typography>
                        </div>
                        {movie.legend && <React.Fragment>
                            <h3 className={classes.subtitle}>Legend</h3>
                            <Typography variant={"body1"}>{movie.legend}</Typography>
                        </React.Fragment>}
                        {movie.overview && <React.Fragment>
                            <h3 className={classes.subtitle}>Overview</h3>
                            <Typography variant={"body1"}>{movie.overview}</Typography>
                        </React.Fragment>}
	      			</Grid>
	      		</Grid>
	      </Container>
	      </div>

          <Container>
            <h2>Recommended movies</h2>
                <Grid container spacing={2}>
                    {
                        recommendMovies.map((movie, i)=>{
                            return (<Grid item md={2}>
                                        <MovieCard key={i} titel={movie.title} 
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
            <h2>Similar movies</h2>
                <Grid container spacing={2}>
                    {
                        similarMovies.map((movie, i)=>{
                            return (<Grid item md={2}>
                                        <MovieCard key={i} titel={movie.title} 
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
		</>

      :<p>Loading</p>
  	
	);


}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = dispatch => ({
    addVisitedMovie: (id) => dispatch(addVisitedMovie(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Movie);

