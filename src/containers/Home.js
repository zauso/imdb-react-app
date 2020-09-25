import React, { useState, useEffect, Suspense } from 'react';
import { connect } from 'react-redux'
import { Link, useLocation } from 'react-router-dom';
import { fetchPopularMovies } from '../store/actions/popularMovie';
import { fetchUpcomingMovies } from '../store/actions/upcomingMovies';
import { fetchTopratedMovies } from '../store/actions/topratedMovies';
import { makeStyles } from '@material-ui/core/styles'
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Container from '@material-ui/core/Container';
import withStyles from "@material-ui/core/styles/withStyles"
import Grid from "@material-ui/core/Grid"
import MovieCard from '../components/MovieCard'
import CircularProgress from '@material-ui/core/CircularProgress';
import Helmet from 'react-helmet';
import CenterProgress from '../components/CenterProgress'
import Errors from './Errors'
import MoviesList from '../components/MoviesList'
import LazyLoad from 'react-lazyload'
import MovieCardSkeleton from '../components/skeletons/MovieCardSkeleton'

//const MovieCard = React.lazy(() => import('../components/MovieCard'));

const CustomTabs = withStyles({
    root: {
        borderRadius: 4,
        border: '1px solid rgb(242, 242, 242)',
        overflow: 'hidden',
        background: '#f6f6f6',
        margin: '32px 0 32px 0'
    },
    indicator: {
        background: 'none'
    }
})(Tabs)

const CustomTab = withStyles({
    root: {
        minWidth: 110
    },
    selected: {
        background: '#115293',
        color: 'white'
    }
})(Tab)

function Home(props){

  const location = window.location.pathname.slice("/").slice(1) || "popular";
	const { movies, fetchPopularMovies, popularMovies, fetchUpcomingMovies, upcomingMovies, fetchTopratedMovies, topratedMovies, deleteError, errors } = props;
  const [category, setCategory] = useState(location)

  const categories = {
    POPULAR: 'popular',
    TOP_RATED: 'top-rated',
    UPCOMING: 'upcoming'
  }

  const categoryMap = {
      [categories.POPULAR]: {
          movies: popularMovies,
          fetch: fetchPopularMovies
      },
      [categories.TOP_RATED]: {
          movies: topratedMovies,
          fetch: fetchTopratedMovies
      },
      [categories.UPCOMING]: {
          movies: upcomingMovies,
          fetch: fetchUpcomingMovies,
      }
  }

  const switchTab = (categoryName) => {
    setCategory(categoryName)
    if(!categoryMap[categoryName].movies.length){ 
      categoryMap[categoryName].fetch()
    }
  } 

  const loadMore = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.scrollingElement.scrollHeight) {
        categoryMap[category].fetch()
    }
  }

  useEffect(() => {
    categoryMap[category].fetch()
  }, [category]);

  useEffect(() => {
    window.addEventListener('scroll', loadMore);
    return () => {
      window.removeEventListener('scroll', loadMore);
    }
  }, [category])

return(
  <Container>
    <Helmet>
     <title>Imdb react app</title>  
    </Helmet>
    <CustomTabs 
    value={category}
    onChange={(e, newValue) => switchTab(newValue)}
    >
      <CustomTab component={Link} to="/" label="Popular" value={categories.POPULAR}/>
      <CustomTab component={Link} to="/top-rated" label="Top rated" value={categories.TOP_RATED}/>
      <CustomTab component={Link} to="/upcoming" label="Upcoming" value={categories.UPCOMING}/>
    </CustomTabs>
    {categoryMap[category].movies.length && <MoviesList movies={categoryMap[category].movies}/>}
    <CenterProgress/>
    <Errors/>
  </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    popularMovies: state.popularMovies.movies,
    upcomingMovies: state.upcomingMovies.movies,
    topratedMovies: state.topratedMovies.movies
  }
}
const mapDispatchToProps = dispatch => ({
  fetchPopularMovies: () => dispatch(fetchPopularMovies()),
  fetchUpcomingMovies: () => dispatch(fetchUpcomingMovies()),
  fetchTopratedMovies: () => dispatch(fetchTopratedMovies())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
