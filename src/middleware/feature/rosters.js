import { apiRequest, API_SUCCESS, API_FAILURE } from '../../actions/api';
import { GET_ALL_ROSTERS, GET_ONE_ROSTERS, ROSTERS, setRoster } from '../../actions/rosters';
export const ALL_ROSTER_API = 'https://statsapi.web.nhl.com/api/v1/teams'
export const ONE_ROSTER_API = (teamId) => `https://statsapi.web.nhl.com/api/v1/teams/${teamId}`
export const parseNHLResponse = (data) => {
	// data.dates[0].games.map((game) => {
 //          // //console.log(game.teams.away.team.name, game.teams.home.team.name)
 //        })
	return data
}

export const rostersMiddleware = ({ dispatch }) => (next) => (action) => {
  next(action);
	switch (action.type){
		case GET_ALL_ROSTERS:
			//console.log("this bad boiiii")
			dispatch(apiRequest({url: ALL_ROSTER_API, feature: ROSTERS}))
			break;

		case GET_ONE_ROSTERS:
			//console.log("one team")
			dispatch(apiRequest({url: ONE_ROSTER_API(action.payload), feature: ROSTERS}))
			break;

		case `${ROSTERS} ${API_SUCCESS}`:
			dispatch(setRoster(action.payload.data.teams))
			break;

		default:
			break;
	}

};