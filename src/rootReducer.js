import {combineReducers} from 'redux';
import contentListReducer from './content-list/reducer';

const rootReducer = combineReducers({
  contentList: contentListReducer
})

export default rootReducer