import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

// TODO FIX BABEL

const PrivateRoutes = ({
    // eslint-disable-next-line react/prop-types
    component: Component, ...rest
}) => (
    <Route
        {...rest}
        render={(routeProps) => {
            if (() => 'FUNCTION TO TEST USER TYPE') {
                return <Component {...routeProps} />;
            }
            return (
                <Redirect
                    to={{
                        pathname: 'URL PATH',
                    }}
                />
            );
        }}
    />
);


PrivateRoutes.defaultProps = {
};

PrivateRoutes.propTypes = {
};

export default PrivateRoutes;
