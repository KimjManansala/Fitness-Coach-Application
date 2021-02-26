import React from 'react';
import ReactDOM from 'react-dom';



// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// React Router
import { Router, Route, Switch } from 'react-router-dom';
import history from './history'; // Import history in any component you want to use it
import { routerMiddleware} from 'react-router-redux'

// Router middleware
const routing = routerMiddleware(history, thunk);

// Root reducer
import rootReducer from './Reducers/rootReducer.js';

// Initialize redux store and thunk middleware
const store = createStore(
    rootReducer,
    applyMiddleware(routing)
);

import AppRouter from './AppRouter.js'

ReactDOM.render(
  <Provider store={store}>
        <AppRouter history={history} />
  </Provider>,
   document.getElementById('root'));