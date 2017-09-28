import configureMockStore from 'redux-mock-store';

import AppReducer, { addName, removeName, getPost } from '../app';

const mockStore = configureMockStore([]);
const store = mockStore({});

beforeEach(() => {
  store.clearActions();
});

// Override system functions to garantee always the same result
global.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        userId: 1,
        id: 1,
        title: 'sunt aut facere repellat provident occaecati',
        body:
          'quia et suscipit suscipit recusandae consequuntur rem eveniet architecto',
      }),
  }),
);

const NEW_DATE = new Date('2017');
global.Date = jest.fn(() => NEW_DATE);

// Test Actions
it('[Action] ADD_NAME (Rui Miguel)', () => {
  store.dispatch(addName('Rui Miguel'));
  expect(store.getActions()).toMatchSnapshot();
});

it('[Action] ADD_NAME (empty)', () => {
  store.dispatch(addName(''));
  expect(store.getActions()).toMatchSnapshot();
});

it('[Action] SUBTRACT_NAME (2)', () => {
  store.dispatch(removeName(2));
  expect(store.getActions()).toMatchSnapshot();
});

it('[Action] SUBTRACT_NAME (empty)', () => {
  store.dispatch(removeName());
  expect(store.getActions()).toMatchSnapshot();
});

it('[Action] GET_POST', async () => {
  store.dispatch(await getPost());
  expect(store.getActions()).toMatchSnapshot();
});

// Test Reducers
it('[Reducer] INITIAL STATE', () => {
  const action = { type: 'DUMMY' };
  expect(AppReducer(undefined, action)).toMatchSnapshot();
});

it('[Reducer] ADD_NAME (Rui Miguel)', () => {
  expect(AppReducer(undefined, addName('Rui Miguel'))).toMatchSnapshot();
});

it('[Reducer] SUBTRACT_NAME (3)', () => {
  expect(AppReducer(undefined, removeName(3))).toMatchSnapshot();
});

it('[Reducer] GET_POST', async () => {
  expect(AppReducer(undefined, await getPost())).toMatchSnapshot();
});
