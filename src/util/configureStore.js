import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunkMiddleware from 'redux-thunk';
import { apiMiddleware } from "../middleware/core/api";
import { actionSplitterMiddleware } from "../middleware/core/actionSplitterMiddleware"
import { selectDateMiddleware } from "../middleware/feature/selectDate"
import { rostersMiddleware } from "../middleware/feature/rosters"

export default function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(
      thunkMiddleware, 
      apiMiddleware,
      actionSplitterMiddleware,
      selectDateMiddleware,
      rostersMiddleware)
  );
}

