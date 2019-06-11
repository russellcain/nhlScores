// api.js
export const API_REQUEST = 'API REQUEST'
export const API_SUCCESS = 'API SUCCESS'
export const API_FAIL = 'API FAILURE'

export const apiRequest = ({url, feature}) => ({
	type: `${feature} ${API_REQUEST}`,
	payload: {},
	meta: {url, feature},
});

export const ApiSuccess = ({feature, response}) => ({
	type: `${feature} ${API_SUCCESS}`,
	payload: response,
});

export const ApiFailure = ({feature, error}) => ({
	type: `${feature} ${API_FAIL}`,
	payload: error,
});
