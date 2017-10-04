import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import promise from 'redux-promise';
import { persistStore, autoRehydrate } from 'redux-persist';
import { withState } from 'recompose';
import PropTypes from 'prop-types';
import { createNetworkInterface } from 'apollo-client';
import { ApolloClient, ApolloProvider } from 'react-apollo';

import registerServiceWorker from './registerServiceWorker';
import Router from './Router';
import app from './redux/modules/App/index';
import user from './redux/modules/User/index';

const history = createHistory();
const middleware = routerMiddleware(history);

class App extends Component {
  static propTypes = {
    setLoading: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);

    // Add JWT to the requests header (Apollo)
    const networkInterface = createNetworkInterface({
      uri: 'http://localhost:3000/graphql',
    });
    networkInterface.use([{
      applyMiddleware(req, next) {
        if (!req.options.headers) {
          req.options.headers = {};
        }
        const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI5YTNkYjcyNS0zYmMyLTQ2ZDQtYjQxMy0xYmVmMzliNDM5ZTkiLCJzdWIiOiIxIiwic2NwIjoidXNlciIsImlhdCI6MTUwNzAzMjU3OCwiZXhwIjoxNTA3MDM2MTc4fQ.VuUlo5MVXY3km4ApRyvfqPswmSCcaYCFCeKc0DLqG08";
        req.options.headers.authorization = token ? `Bearer ${token}` : null;
        next();
      }  
    }]);

    // Apollo Client
    this.client = new ApolloClient({
      networkInterface,
    });

    // Create Store (Redux)
    this.store = createStore(
      combineReducers({
        app,
        user,
        router: routerReducer,
        apollo: this.client.reducer(),
      }),
      undefined,
      compose(applyMiddleware(promise,
                              middleware,
                              this.client.middleware()),
              autoRehydrate()),
      // If you are using the devToolsExtension, you can add it here also
      (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
    );

    // If DEV, allow access to the store
    if (process.env.NODE_ENV === 'development') {
      window.s = this.store;
    }

    // Redux store persist
    persistStore(this.store, { blacklist: ['router, apollo'] }, () =>
      this.props.setLoading(false),
    );
  }

  render() {
    return !this.props.loading ? (
      <ApolloProvider store={this.store} client={this.client}>
        <Router history={history} />
      </ApolloProvider>
    ) : null;
  }
}

const enhance = withState('loading', 'setLoading', true);
const AppWithState = enhance(App);

ReactDOM.render(<AppWithState />, document.getElementById('root'));

registerServiceWorker();
