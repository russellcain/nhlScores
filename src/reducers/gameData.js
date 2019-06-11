import {SET_GAMES} from "../actions/selectDate";
import initialState from './initialState';

// Projections
export default function gameData(state = initialState, action) {

switch (action.type) { 

    case SET_GAMES:
    	//console.log('setting game data', action.payload.dates[0].games)

    	return {
    		...state,
    		gameData: action.payload.dates[0].games,
    	}
		
	default:
    	return state
  }
}