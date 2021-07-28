import { createStore, combineReducers, applyMiddleware } from 'redux';
import usersReducer from '../reducers/usersReducer';
import thunk from 'redux-thunk';
import homesReducer from '../reducers/homesReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  user: usersReducer,
  homes: homesReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
