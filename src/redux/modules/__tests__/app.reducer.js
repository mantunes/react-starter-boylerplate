import configureMockStore from 'redux-mock-store';

import AppReducer, { addName, removeName } from '../app';

const mockStore = configureMockStore([]);
const store = mockStore({});

beforeEach(() => {
  store.clearActions();
});

it('INITIAL STATE', () => {
  const action = { type: 'DUMMY' };
  expect(AppReducer(undefined, action)).toMatchSnapshot();
});

it('ADD_NAME (Rui Miguel)', () => {
  expect(AppReducer(undefined, addName('Rui Miguel'))).toMatchSnapshot();
});

it('SUBTRACT_NAME (Rui Miguel)', () => {
  expect(AppReducer(undefined, removeName(0))).toMatchSnapshot();
});
