import rp from 'request-promise-native';

const baseUrl = 'http://localhost:3001';

export function loadHighlights (callback) {
  return getFromApi('/highlights', callback);
}
export function createHighlight (highlight) {
  return saveToApi('/highlights', highlight, (dispatch) => {
    dispatch({type: 'ADD_HIGHLIGHT', payload: highlight });
  });
}
export function removeHighlight (highlight) {
  return dispatch => Promise.resolve()
    .then(response => {
      dispatch({type: 'REMOVE_HIGHLIGHT', payload: highlight });
    })
}
export function createAnnotation (annotation) {
  return saveToApi('/annotations', annotation, (dispatch) => {
    dispatch({type: 'ADD_ANNOTATION', payload: annotation });
    dispatch({type: "ANNOTATION_SAVE_SUCCESS"});
  });
}
export function removeAnnotation (annotation) {
  return dispatch => Promise.resolve()
    .then(response => {
      dispatch({type: 'REMOVE_ANNOTATION', payload: annotation });
    })
}

// TODO improve with filters: https://github.com/typicode/json-server#filter
const getFromApi = (endpoint, then) => {
  const options = {
    method: 'GET',
    uri: baseUrl + endpoint,
    headers: {
      'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response
  };
  // console.log('[getFromApi] making the call, url: ' + baseUrl + endpoint);
  return () =>
    rp(options)
      .then((result) => {
        // console.log('[getFromApi] result: '+result);
        if (then) then(result);
      })
      .catch(function (err) {
        console.log('[getFromApi] Error calling API: ', err);
      });
};

const saveToApi = (endpoint, body, then) => {
  const options = {
    method: 'POST',
    uri: baseUrl + endpoint,
    body: body,
    json: true // Automatically stringifies the body to JSON
  };
  // console.log('[saveToApi] body: '+JSON.stringify(body));
  // console.log('[saveToApi] making the call, uri: '+ baseUrl + endpoint);
  return dispatch =>
    rp(options)
    .then(() => then && then(dispatch))
    .catch(function (err) {
      console.log('[saveToApi] Error calling API: ', err);
    });};