import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import axios from 'axios'
import httpAdapter from 'axios/lib/adapters/http'
import * as actions from './actions';

import content from './content.json'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll();
  })

  test('current should return a SET_CONTENT when gets the current integer', () => {
    const expectedActions = [
      { type: 'SET_CONTENT', payload: content }
    ];

    const store = mockStore({});
    store.dispatch(actions.fetchContent())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })
  });
});