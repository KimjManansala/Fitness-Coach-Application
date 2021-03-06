import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, Switch } from 'react-router-dom';

// Components
import Homepage from './Views/HomePage/HomePage.js'
import SignIn from './Views/SignUpAndSignIn/SignIn.js';
import TrainerPageContainer from './Views/TrainerPage/TrainerPageContainer.js';
import URLS from './Reducers/frontEndUrls.js';


const AppRouter = ({
    history
}) => (
    <Router history={history}>
        <Switch>
            <Route path={URLS.SIGN_IN} exact component={SignIn}/>
            <Route path={URLS.HOMEPAGE} exact component={Homepage} />
            <Route path={URLS.TRAINER_PAGE} exact component={TrainerPageContainer} />
        </Switch>
    </Router>
);

export default AppRouter;
