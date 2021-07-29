import { createStore, combineReducers, applyMiddleware } from 'redux';
import UsersReducer from '../reducers/UsersReducer';
import thunk from 'redux-thunk';
import HomesReducer from '../reducers/HomesReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  user: UsersReducer,
  homes: HomesReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
