// api.js

import axios from 'axios';
import { API_REQUEST, ApiSuccess, ApiFailure } from '../../actions/api';

export const apiMiddleware = ({ dispatch }) => (next) => (action) => {
  next(action);
  if (action.type) {
    if (action.type.includes(API_REQUEST)) {
		const {url, feature} = action.meta;
		axios.get(url)
			.then(response => dispatch(ApiSuccess({ response, feature })))
			.catch(error => dispatch(ApiFailure({ error, feature }))); 
    }
  }
};