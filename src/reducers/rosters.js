import {SET_ROSTERS} from "../actions/rosters";
import initialState from './initialState';

// Projections
export default function rosters(state = initialState, action) {

switch (action.type) { 

    case SET_ROSTERS:

    	return {
    		...state,
    		rosters: action.payload,
    	}
		
	default:
    	return state
  }
}