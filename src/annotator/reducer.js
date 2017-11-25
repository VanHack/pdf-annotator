function add(state, payload) {
  const characterRange = payload.characterRange;
  const page = state[payload.page] || [];
  const newpage = [ ...page, {
    rangeStart: characterRange.start,
    rangeEnd: characterRange.end,
    id: payload.id,
    classApplier: payload.classApplier.className,
    elementId: payload.containerElementId
  } ]   
  return {...state, [payload.page]: newpage}
}

function remove(state, payload) {
  const page = state[payload.page] || [];
  const index =  page.findIndex((i) => i.id === payload.id)
  const newPage = [ ...page.slice(0, index), ...page.slice(index + 1) ]

  return {...state, [payload.page]: newPage}
}

export default function(state = [], action = {}) {
  switch (action.type) {
  case 'ADD_HIGHLIGHT':
    return add(state, action.payload);
  case 'REMOVE_HIGHLIGHT':
    return remove(state, action.payload);
  default:
    return state;
  }
}