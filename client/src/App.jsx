import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./features/Navbar/Navbar.jsx";
import CoreMetrics from "./features/CoreMetrics/CoreMetrics.jsx";
import { REACT_URLS } from "./app/api_and_urls.js";
import { Container } from "semantic-ui-react";

function App() {
    return (
        <Router>
            <Navbar />
            <Container  style={{
                margin: "5px",
            }}>
                <Switch>
                    {/* TODO MAKE PRIVATE ROUTES */}
                    {/* TODO MAKE UNKNOWN PAGE AND UNAUTHROIZED PAGE */}
                    <Route
                        path={REACT_URLS.CORE_METICS}
                        component={CoreMetrics}
                    />
                    <Route
                        path={REACT_URLS.CORE_METICS_1}
                        component={CoreMetrics}
                    />
                </Switch>
            </Container>
        </Router>
    );
}

export default App;
