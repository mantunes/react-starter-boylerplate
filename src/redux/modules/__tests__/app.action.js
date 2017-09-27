import configureMockStore from 'redux-mock-store';

import * as actions from '../app';

const mockStore = configureMockStore([]);
const store = mockStore({});

beforeEach(() => {
  store.clearActions();
});

it('ADD_NAME (Rui Miguel)', () => {
  store.dispatch(actions.addName('Rui Miguel'));
  expect(store.getActions()).toMatchSnapshot();
});

it('ADD_NAME (empty)', () => {
  store.dispatch(actions.addName(''));
  expect(store.getActions()).toMatchSnapshot();
});

it('SUBTRACT_NAME (0)', () => {
  store.dispatch(actions.removeName(0));
  expect(store.getActions()).toMatchSnapshot();
});

it('SUBTRACT_NAME (empty)', () => {
  store.dispatch(actions.removeName());
  expect(store.getActions()).toMatchSnapshot();
});

// Não consigo reproduzir o resultado do fetch()
//global.fetch = jest.fn().mockImplementation(
//  () => Promise.resolve(
//    'json': ({
//      userId: 1,
//      id: 1,
//      title: 'sunt aut facere repellat provident occaecati',
//      body:
//        'quia et suscipit suscipit recusandae consequuntur rem eveniet architecto',
//    }),
//  ),
//);
//
//it('GET_POST', async () => {
//  await store.dispatch(actions.getPost());
//  expect(store.getActions()).toMatchSnapshot();
//});
