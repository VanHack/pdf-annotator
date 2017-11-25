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
  page.splice(
    page.findIndex(
      (i) => i.id === payload.id
    ), 1
  );
  state[payload.page] = page
  return state
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