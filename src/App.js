import React from 'react';
import Label from './components/atoms/Label';
// eslint-disable-next-line
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';

import NameListContainer from './containers/nameListContainer';
import './App.scss';

const store = configureStore();

const App = () => (
  <div className="App">
    <Label />
    <Provider store={store}>
      <NameListContainer />
    </Provider>
  </div>
);

export default App;