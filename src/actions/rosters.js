// feature declaration
export const ROSTERS = "[ROSTERS]"
export const GET_ALL_ROSTERS = `GET ALL ${ROSTERS}`
export const GET_ONE_ROSTERS = `GET ONE ${ROSTERS}`
export const SET_ROSTERS = `SET ${ROSTERS}`

export const obtainAllRosters = () => ({
	type: GET_ALL_ROSTERS,
});

export const obtainOneRosters = (teamId) => ({
	type: GET_ONE_ROSTERS,
	payload: teamId,
});

export const setRoster = (data) => ({
	type: SET_ROSTERS,
	payload: data,
});