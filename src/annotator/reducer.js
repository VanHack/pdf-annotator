function add_highlight(state, payload) {
  const characterRange = payload.characterRange;
  const page = state[payload.page] || [];
  const newPage = [ ...page, {
    id: payload.id,
    rangeStart: characterRange.start,
    rangeEnd: characterRange.end,
    classApplier: payload.classApplier.className,
    elementId: payload.containerElementId
  } ];
  return {...state, [payload.page]: newPage};
}

function remove_highlight(state, payload) {
  const page = state[payload.page] || [];
  const index =  page.findIndex((i) => i.id === payload.id);
  const newPage = [ ...page.slice(0, index), ...page.slice(index + 1) ];
  return {...state, [payload.page]: newPage};
}

function add_annotation(state, payload) {
  const page = state[payload.page] || [];
  const highlight = page.filter(f => f.id === payload.highlight)[0];
  const annotations = highlight.annotations || [];
  const newHighlight = {...highlight, annotations: [...annotations, payload.annotation]};
  const index = page.findIndex(i => i.id === newHighlight.id);
  const newPage = [ ...page.slice(0, index), newHighlight, ...page.slice(index + 1) ];
  return {...state, [payload.page]: newPage};
}

// TODO: not working
function set(state, payload) {
  return state = payload;
}
export default function(state = {}, action = {}) {
  switch (action.type) {
  case 'SET_HIGHLIGHTS':
    return set(state, action.payload);
  case 'ADD_HIGHLIGHT':
    return add_highlight(state, action.payload);
  case 'REMOVE_HIGHLIGHT':
    return remove_highlight(state, action.payload);
  case 'ADD_ANNOTATION':
    return add_annotation(state, action.payload);
  default:
    return state;
  }
}