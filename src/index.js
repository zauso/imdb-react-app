import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers';

import * as m from './store/middlewares/start'




const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, m.logger)))

ReactDOM.render(
  
	  <Provider store={store}>
	  <BrowserRouter>
	    	<App />
	    	</BrowserRouter>
	   	  </Provider>
  ,
  document.getElementById('root')
);

