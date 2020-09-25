import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import {Link} from "react-router-dom"
import MovieCardSkeleton from './skeletons/MovieCardSkeleton'
import getScoreColor from '../utils/scoreColor'

const useStyles = makeStyles(theme => ({
	root: {
		position: 'relative',
		maxWidth: '300px',
		textDecoration: 'none',
        "&:hover": {
            "& $movieImage":{
                transform: 'scale(1.075)'
            }
        }
	},
	posterBox: {
        position: 'relative',
        display: 'block',
        width: "100%",
        minHeight: 220,
        borderRadius: "4px",
        overflow: 'hidden',
        backgroundColor: '#e8e8e8',
	},
	movieImage: {
        position: 'relative',
        display: 'block',
        width: "100%",
        minHeight: 220,
        borderRadius: "4px",
        backgroundColor: '#e8e8e8',
        transition: 'all 0.15s ease-in-out'
	},
	title: {
		fontSize: '24px',
		color: '#000',
		textDecoration: 'none',
		margin: '4px 0 0 0'
		//text
	},
	info: {
		fontSize: '16px',
		color: '#000',
		margin: '4px 0 0 0'
	},
	vote: {
        display: 'inline-flex',
        position: 'absolute',
        left: -5,
        top: 8,
        justifyContent: 'center',
        fontWeight: 'bold',
        padding: '2px 8px',
        minWidth: 30,
        color: 'white',
        background: '#83d620',
        borderRadius: 2,
	}
}))



function MovieCard(props){
	const classes = useStyles();
	const { id, title, imgUrl, info, vote } = props;
	const scoreColor = getScoreColor(vote);

	return(
		<React.Fragment>
			<Link className={classes.root} to={`/movie/${id}`}>
				<div className={classes.posterBox}>
					<img className={classes.movieImage} src={imgUrl} alt={title}/>
				</div>
				<div className={classes.movieDetails}>
					<h4 className={classes.title}>{title}</h4>
					<p className={classes.info}>{info}</p>
					<span className={classes.vote} style={{background: scoreColor}}>{vote}</span>
				</div>
			</Link>
		</React.Fragment>
	)

}


export default MovieCard

