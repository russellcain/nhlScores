// selectDate.js

// api.js

import { apiRequest, API_SUCCESS, API_FAILURE } from '../../actions/api';
import { GET_GAMES, GAMES, setGameData } from '../../actions/selectDate';
export const NHL_API = (date) => `https://statsapi.web.nhl.com/api/v1/schedule?expand=schedule.linescore&date=${date}`
export const parseNHLResponse = (data) => {
	// data.dates[0].games.map((game) => {
 //          // //console.log(game.teams.away.team.name, game.teams.home.team.name)
 //        })
	return data
}

export const selectDateMiddleware = ({ dispatch }) => (next) => (action) => {
  next(action);
	switch (action.type){
		case GET_GAMES:
			// //console.log(action, NHL_API(action.payload), GAMES);
			dispatch(apiRequest({url: NHL_API(action.payload), feature: GAMES}))
			break;

		case `${GAMES} ${API_SUCCESS}`:
			dispatch(setGameData(action.payload.data))
		default:
			break;
	}

};