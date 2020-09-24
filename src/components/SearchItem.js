import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import Typography from "@material-ui/core/Typography" 
import getScoreColor from "../utils/scoreColor"
import {Link} from "react-router-dom"

const useStyles = makeStyles(theme => ({
  listItem: {
    height: '60px'
  },
  itemImage: {
    height: '40px',
    marginRight: '20px'
  }
}));


function SearchItem(props){
	const classes = useStyles();
	let { movie } = props;
	return(
		<ListItem button component={Link} to={`/movie/${movie.id}`} className={classes.listItem}>
			<img className={classes.itemImage} src={movie.posterImageUrl} alt={movie.title}/>
			<Typography variant="p">{movie.title}</Typography>
			{movie.voteAverage ?
				<span style={{position: 'absolute', right: '10px', color: getScoreColor(movie.voteAverage)}}>{movie.voteAverage}</span>
			:
				<span style={{position: 'absolute', right: '10px'}}>-</span>
			}
		</ListItem>
	)
}

export default SearchItem;