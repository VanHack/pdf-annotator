import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import contentListReducer from './content-list/reducer';
import highlightReducer from './annotator/reducer';

const rootReducer = combineReducers({
  contentList: contentListReducer,
  highlights: highlightReducer,
  form: formReducer.plugin({
    account: (state, action) => {
      switch(action.type) {
        case 'ANNOTATION_SAVE_SUCCESS':
          return undefined;
        default:
          return state;
      }
    }
  }),
})

export default rootReducer