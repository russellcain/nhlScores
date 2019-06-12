// feature declaration
export const ROSTERS = "[ROSTERS]"
export const TEAMS = "[TEAMS]"
export const GET_ALL_ROSTERS = `GET ALL ${ROSTERS}`
export const GET_ONE_ROSTER = `GET ONE ${ROSTERS}`
export const SET_ROSTERS = `SET ${ROSTERS}`
export const SET_TEAMS = `SET ${TEAMS}`

export const obtainAllRosters = () => ({
	type: GET_ALL_ROSTERS,
});

export const obtainOneRosters = (teamId) => ({
	type: GET_ONE_ROSTER,
	payload: teamId,
});

export const setRoster = (data) => ({
	type: SET_ROSTERS,
	payload: data,
});

export const setTeams = (data) => ({
	type: SET_TEAMS,
	payload: data,
})