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

    this.store = createStore(
      combineReducers({
        app,
        user,
        router: routerReducer,
      }),
      undefined,
      compose(applyMiddleware(promise, middleware), autoRehydrate()),
    );

    if (process.env.NODE_ENV === 'development') {
      window.s = this.store;
    }

    persistStore(this.store, { blacklist: ['router'] }, () =>
      this.props.setLoading(false),
    );
  }

  render() {
    return !this.props.loading ? (
      <div className="App">
        <Provider store={this.store}>
          <Router history={history} />
        </Provider>
      </div>
    ) : null;
  }
}

const enhance = withState('loading', 'setLoading', true);
const AppWithState = enhance(App);

ReactDOM.render(<AppWithState />, document.getElementById('root'));

registerServiceWorker();
