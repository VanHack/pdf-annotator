import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import axios from 'axios'
import httpAdapter from 'axios/lib/adapters/http'
import * as actions from './actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll();
  })

  test('current should return ADD_HIGHLIGHT', () => {
    const highlight = {
      test: 1
    }
    const expectedActions = [
      { type: 'ADD_HIGHLIGHT', payload: highlight }
    ];

    const store = mockStore({});
    store.dispatch(actions.createHighlight(highlight))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })
  });
  
  test('current should return REMOVE_HIGHLIGHT', () => {
    const highlight = 1
    const expectedActions = [
      { type: 'REMOVE_HIGHLIGHT', payload: highlight }
    ];

    const store = mockStore({});
    store.dispatch(actions.removeHighlight(highlight))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })
  });
  
  test('current should return ADD_ANNOTATION', () => {
    const annotation = {
      test: 1
    }
    const expectedActions = [
      { type: 'ADD_ANNOTATION', payload: annotation }
    ];

    const store = mockStore({});
    store.dispatch(actions.createAnnotation(annotation))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })
  });
  
  test('current should return REMOVE_ANNOTATION', () => {
    const annotation = 1
    const expectedActions = [
      { type: 'REMOVE_ANNOTATION', payload: annotation }
    ];

    const store = mockStore({});
    store.dispatch(actions.removeAnnotation(annotation))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })
  });
});