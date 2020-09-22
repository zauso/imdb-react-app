import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import Typography from "@material-ui/core/Typography" 
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
	let { a } = props;
	let poster = "https://image.tmdb.org/t/p/w154"+a.poster_path
	let movieLink = "/movie/"+a.id;
	return(
		<ListItem button component={Link} to={movieLink} className={classes.listItem}>
			{a.poster_path && <img className={classes.itemImage} src={poster} alt={a.title}/>}
			<Typography variant="p">{a.title}</Typography>
			{a.vote_average ?
				<span style={{position: 'absolute', right: '10px'}}>{a.vote_average}</span>
			:
				<span style={{position: 'absolute', right: '10px'}}>-</span>
			}
		</ListItem>
	)
}

export default SearchItem;