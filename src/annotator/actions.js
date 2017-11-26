import { getFromApi, saveToApi } from '../api/api';

const highlightsEndpoint = '/highlights';
const annotationsEndpoint = '/annotations';

export function loadHighlights (then) {
  return getFromApi(highlightsEndpoint, (dispatch, highlights) => {
    highlights.forEach((highlight) => {
      dispatch({type: 'ADD_HIGHLIGHT', payload: highlight });
    });
    // TODO: didn't work...
    // dispatch({ type: 'SET_HIGHLIGHTS', payload: highlights });
    if (then) then();
  });
}
export function createHighlight (highlight) {
  return saveToApi(highlightsEndpoint, highlight, dispatch => {
    dispatch({ type: 'ADD_HIGHLIGHT', payload: highlight });
  });
}
// TODO check, specially with its annotations... removing them as well?
export function removeHighlight (highlight) {
  return dispatch => Promise.resolve()
    .then(response => {
      dispatch({ type: 'REMOVE_HIGHLIGHT', payload: highlight });
    })
}

export function loadAnnotations (then) {
  return getFromApi(annotationsEndpoint, (dispatch, annotations) => {
    console.log('[loadAnnotations] annotations.length: '+annotations.length);
    // TODO also try to avoid repetition here
    annotations.forEach((annotation) => {
      dispatch({type: 'ADD_ANNOTATION', payload: annotation });
      dispatch({ type: "ANNOTATION_SAVE_SUCCESS"});
    });
    if (then) then();
  });
}
export function createAnnotation (annotation) {
  return saveToApi(annotationsEndpoint, annotation, dispatch => {
    dispatch({ type: 'ADD_ANNOTATION', payload: annotation });
    dispatch({ type: "ANNOTATION_SAVE_SUCCESS"});
  });
}
export function removeAnnotation (annotation) {
  return dispatch => Promise.resolve()
    .then(response => {
      dispatch({ type: 'REMOVE_ANNOTATION', payload: annotation });
    });
}
