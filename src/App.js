import React, { useState, useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux'
import './App.css';

import Home from './containers/Home';
import Movie from './containers/Movie';
import Visited from './containers/Visited'
import Navbar from "./components/Navbar"

import { fetchGenres } from './store/actions/genres'

function App(props) {

  const { fetchGenres } = props

  useEffect(()=>{
    fetchGenres()
  },[])
  
  return (
    <>
      <Navbar/> 
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/popular' component={Home}/>
        <Route exact path='/top-rated' component={Home}/>
        <Route exact path='/upcoming' component={Home}/>
        <Route path='/movie/:id' component={Movie}/>
        <Route path='/visited' component={Visited}/>
      </Switch> 
    </>
  )
}

const mapStateToProps = (state) => {
  return {
  }
}
const mapDispatchToProps = dispatch => ({
  fetchGenres: () => dispatch(fetchGenres()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

