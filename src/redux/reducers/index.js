import { combineReducers } from 'redux';
import notes from './notes';
import artWork from './artwork'

const rootReducer = combineReducers({
  notes,
  artWork,
});

export default rootReducer;