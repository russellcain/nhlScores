import { combineReducers } from 'redux';
import gameData from './gameData'
import rosters from './rosters'

const rootReducer = combineReducers({
  gameData,
  rosters,
});

export default rootReducer;
