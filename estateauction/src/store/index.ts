import { createStore, combineReducers, applyMiddleware } from 'redux';
import UsersReducer from '../reducers/UsersReducer';
import thunk from 'redux-thunk';
import homesReducer from '../reducers/homesReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  user: UsersReducer,
  homes: homesReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
