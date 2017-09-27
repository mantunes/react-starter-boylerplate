import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import PropTypes from 'prop-types';

import HomeScreen from './components/HomeScreen';
import LoginScreen from './components/LoginScreen';

const Router = ({ history, user }) => {
  const isLoggedIn = user !== null;

  return (
    <div>
      <ConnectedRouter history={history}>
        <div>
          <Route
            exact
            path="/"
            render={() =>
              isLoggedIn ? <HomeScreen /> : <Redirect to="/login" />}
          />
          <Route exact path="/login" component={LoginScreen} />
        </div>
      </ConnectedRouter>
    </div>
  );
};

Router.propTypes = {
  history: PropTypes.shape().isRequired,
  user: PropTypes.shape(),
};

export default connect(({ user }) => ({ user }))(Router);
