import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const AuthRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authenticated === true ? (
        <Redirect to="/home" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

AuthRoute.prototype = {
  user: PropTypes.object
};

const mapStateToProps = state => ({
  authenticated: state.user.authenticated
});

export default connect(mapStateToProps)(AuthRoute);
