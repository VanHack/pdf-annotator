
export function createHighlight (highlight) {
  return dispatch => Promise.resolve()
    .then(response => {
      dispatch({type: 'ADD_HIGHLIGHT', payload: highlight })
    })
}
export function removeHighlight (highlight) {
  return dispatch => Promise.resolve()
    .then(response => {
      dispatch({type: 'REMOVE_HIGHLIGHT', payload: highlight })
    })
}
export function createAnnotation (annotation) {
  return dispatch => Promise.resolve()
    .then(response => {
      dispatch({type: 'ADD_ANNOTATION', payload: annotation })
      dispatch({type: "ANNOTATION_SAVE_SUCCESS"})
    })
}
export function removeAnnotation (annotation) {
  return dispatch => Promise.resolve()
    .then(response => {
      dispatch({type: 'REMOVE_ANNOTATION', payload: annotation })
    })
}