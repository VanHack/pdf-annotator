import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api';

export function loadHighlights (page) {
  const url = `${BASE_URL}/highlights?page=${encodeURIComponent(page)}`
  return dispatch => 
    axios.get(url)
    .then(response => {
      dispatch({type: 'LOAD_HIGHLIGHTS', payload: {page, highlights: response.data.map(h => h.highlight) }} )
    })
}
export function createHighlight (highlight) {
  const url = `${BASE_URL}/highlights`
  return dispatch => 
    axios.post(url, highlight)
    .then(response => {
      dispatch({type: 'ADD_HIGHLIGHT', payload: highlight });
    })
}
export function removeHighlight (highlight) {
  const url = `${BASE_URL}/highlights/${highlight}`
  return dispatch => 
    axios.delete(url)
    .then(response => {
      dispatch({type: 'REMOVE_HIGHLIGHT', payload: highlight });
    })
}
export function loadAnnotations (page, highlight) {
  const url = `${BASE_URL}/highlights/${highlight}/annotations`
  return dispatch => 
    axios.get(url)
    .then(response => {
      dispatch({type: 'LOAD_ANNOTATIONS', payload: {page, highlight, annotations: response.data.map(h => h.annotation) }} )
    })
}
export function createAnnotation (annotation) {
  const url = `${BASE_URL}/annotations`
  return dispatch => 
    axios.post(url, annotation)
    .then(response => {
      dispatch({type: 'ADD_ANNOTATION', payload: annotation });
      dispatch({type: "ANNOTATION_SAVE_SUCCESS"});
    })
}
export function removeAnnotation (annotation) {
  const url = `${BASE_URL}/annotations/${annotation}`
  return dispatch => 
    axios.delete(url)
    .then(response => {
      dispatch({type: 'REMOVE_ANNOTATION', payload: annotation });
    })
}