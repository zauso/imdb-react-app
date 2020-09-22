import React, {useState} from 'react'
import { connect } from 'react-redux'
import { searchMovies } from '../store/actions/search'

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography" 
import InputBase from "@material-ui/core/InputBase"
import {makeStyles, withStyles, fade} from "@material-ui/core/styles"
import {useTheme} from '@material-ui/core/styles'
import { flexbox } from '@material-ui/system';
import SearchIcon from '@material-ui/icons/Search';
import debounce from 'lodash/debounce'
import LinearProgress from '@material-ui/core/LinearProgress'
import * as api from '../utils/imdb-api.js'

import List from '@material-ui/core/List'
import Button from '@material-ui/core/Button'
import FavoriteIcon from '@material-ui/icons/Favorite'
import VisibilityIcon from '@material-ui/icons/Visibility'
import ListItem from '@material-ui/core/ListItem'
import {Link} from "react-router-dom"

import SearchResults from "./SearchList"

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: '4px',
    backgroundColor: '#fff',
    '&:hover': {
      backgroundColor: '#fff',
    },
    width: '250px',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 1),
    width: '100%',
  },
  overlay: {
    position: 'fixed',
    width: '100%',
    height: '100vh',
    top: 0,
    left: 0,
    background: 'rgba(9, 9, 10, 0.6)',
    zIndex: 1
},
colorPrimary: {
    backgroundColor: '#e0feff',
  },
  barColorPrimary: {
    backgroundColor: '#ffc5b2',
  }
}));

const CustomAppBar = withStyles({
	root:{
		color: '#000',
		background: '#f6f6f6',
		boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
	}
})(AppBar)
const CustomToolbar = withStyles({
	root:{
		display: 'flex',
		justifyContent: 'space-between'
	}
})(Toolbar)
const NavButton = withStyles(theme => ({
    root: {
        margin: '0 0 0 16px',
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        "&:hover": {
            backgroundColor: 'rgba(0, 0, 0, 0.08)',
        }
    }
}))(Button)

function Navbar(props){

const [showOutput, setShowOutput] = useState(false)
const { searchMovies, foundMovies } = props;
const searchDebounce = debounce(function (value) {
	let parameters = {
		query: value
	}
	searchMovies(parameters)
}, 300)

function handleSearchInput(e){
	let value = e.target.value;
	if(value.length < 2) return false;
	setShowOutput(true)
	searchDebounce(value)
}


const classes = useStyles();

    const desktopNavbar = () => (
    	<React.Fragment>
    	{foundMovies.isFetching && <LinearProgress classes={{colorPrimary: classes.colorPrimary, barColorPrimary: classes.barColorPrimary}} style={{position: 'fixed', top: 0, width: '100%', zIndex: 9999,}}/>}
    	{showOutput && (<div className={classes.overlay} onClick={e => setShowOutput(false)}>
        <SearchResults foundMovies={foundMovies}/>
    	</div>)}
        <CustomAppBar position="sticky">
        	<CustomToolbar>
        		<div>
              <Link to="/" style={{textDecoration: 'none', color: '#000',}}>
        			 <Typography variant="h6">IMDB React App</Typography>
              </Link>
        		</div>
        		<div>
		          <div className={classes.search}>
		            <InputBase
		              placeholder="Search…"
		              onChange={handleSearchInput}
		              classes={{
		                root: classes.inputRoot,
		                input: classes.inputInput,
		              }}
		              inputProps={{ 'aria-label': 'search' }}
		            />
		       	
		          </div>
             	</div>
             	<div>
                <NavButton component={Link} to="/visited" color="inherit">
                    <VisibilityIcon style={{fill: '#115293'}}/>
                </NavButton>
             	</div>
        	</CustomToolbar>
        </CustomAppBar>
        </React.Fragment>
    )

	return(
		desktopNavbar()
	);
}

const mapStateToProps = (state) => {
  return {
    foundMovies: state.searchMovies
  }
}
const mapDispatchToProps = dispatch => ({
  searchMovies: (query) => dispatch(searchMovies(query)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
