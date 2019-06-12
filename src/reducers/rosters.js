import {SET_ROSTERS, SET_TEAMS} from "../actions/rosters";
import initialState from './initialState';

// Projections
export default function rosters(state = initialState.rosters, action) {

switch (action.type) { 

    case SET_ROSTERS:

    	return {
    		...state,
    		chosenRoster: action.payload,
    	}

    case SET_TEAMS:

    	return {
    		...state,
    		teams: action.payload,
    	}
		
	default:
    	return state
  }
}