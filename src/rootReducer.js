import {combineReducers} from 'redux';
import contentListReducer from './content-list/reducer';
import highlightReducer from './annotator/reducer';

const rootReducer = combineReducers({
  contentList: contentListReducer,
  highlights: highlightReducer
})

export default rootReducer