import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
        <Redirect to="/upcoming" />
      )
  )} />
);

const Protected = ({ component: Component, path, loggedIn, exact, currentUser }) => (
  <Route path={path} exact={exact} render={(props) => (
    loggedIn && currentUser.isManager ? (
      <Component {...props} />
    ) : (
        <Redirect to="/login" />
      )
  )} />
);

const mapStateToProps = state => (
  { loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser }
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));