import content from './content.json'

export function fetchContent () {
  return dispatch => {
    return Promise.resolve(content)
      .then(response => {
        dispatch({type: 'SET_CONTENT', payload: content })
      })
  }
}