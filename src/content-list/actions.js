import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api';

export function fetchContent () {
  const url = `${BASE_URL}/documents`
  return dispatch => 
    axios.get(url)
    .then(response => {
      console.log(response)
      dispatch({type: 'SET_CONTENT', payload: response.data })
    })
}