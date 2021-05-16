import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Navbar from './features/Navbar/Navbar.jsx';
import CoreMetrics from './features/CoreMetrics/CoreMetrics.jsx';
import { REACT_URLS } from './app/api_and_urls.js';

function App() {
  return (
    <Router>
          <Navbar />
            <Switch>
                {/* TODO MAKE PRIVATE ROUTES */}
                {/* TODO MAKE UNKNOWN PAGE AND UNAUTHROIZED PAGE */}
                <Route path={REACT_URLS.CORE_METICS} component={CoreMetrics} />
                <Route path={REACT_URLS.CORE_METICS_1} component={CoreMetrics} />
            </Switch>
    </Router>
  );
}

export default App;
