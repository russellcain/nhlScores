// feature declaration
export const GAMES = "[GAMES]"
export const GET_GAMES = `GET ${GAMES}`
export const SET_GAMES = `SET ${GAMES}`

export const obtainGamesForDate = (chosenDate) => ({
	type: GET_GAMES,
	payload: chosenDate,
});

export const setGameData = (data) => ({
	type: SET_GAMES,
	payload: data,
});