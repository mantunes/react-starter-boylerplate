import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import loggerMiddleware from 'redux-logger';
import nameListApp from './modules/nameListApp';

const reducer = combineReducers({
  names: nameListApp
});

const enhancer = compose(
  applyMiddleware(loggerMiddleware),
);

export default function configureStore(func) {
  return createStore(reducer, enhancer);
}
