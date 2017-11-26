import rp from 'request-promise-native';

const baseUrl = 'http://localhost:3001';

// TODO improve with filters: https://github.com/typicode/json-server#filter
export const getFromApi = (endpoint, then) => {
  const url = baseUrl + endpoint;
  const options = {
    method: 'GET',
    uri: url,
    headers: {
      'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response
  };
  return dispatch => {
    // console.log('[getFromApi] calling url: '+url);
    rp(options)
      .then((result) => {
        console.log('[getFromApi] results: ' + result);
        if (then) then(dispatch, result);
      })
      .catch(function (err) {
        console.log(`[getFromApi] Error calling API (${url}): ${err}`);
      });
  };
};

export const saveToApi = (endpoint, body, then) => {
  const url = baseUrl + endpoint;
  const options = {
    method: 'POST',
    uri: url,
    body: body,
    json: true // Automatically stringifies the body to JSON
  };
  return dispatch => {
    // console.log(`[saveToApi] Calling API (${url}), body: ${body}`);
    rp(options)
      .then(() => {
        if (then) then(dispatch);
      })
      .catch(function (err) {
        console.log(`[saveToApi] Error calling API (${url}): ${err}`);
      });
  };
};