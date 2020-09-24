import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Typography from "@material-ui/core/Typography" 
import {Link} from "react-router-dom"

import SearchItem from "./SearchItem"

const useStyles = makeStyles(theme => ({
  list: {
    maxHeight: 400,
    width: '100%',
    zIndex: 2,
    overflowY: 'auto',
    background: '#fff',
    marginTop: '60px'
  }
}));

export default function SearchResults(props){
	const classes = useStyles(props);
	const { foundMovies } = props;
	return (<List className={classes.list}>
    		{
    			foundMovies.length ?
	    			foundMovies.map( movie => <SearchItem movie={movie}/> )
	    		:
	    			<h3>No results</h3>
    		}
    		</List>);
}