import { getFromApi } from '../api/api';

export function fetchContent () {
  return getFromApi('/documents', (dispatch, documents) => {
    dispatch({type: 'SET_CONTENT', payload: documents });
  });
}