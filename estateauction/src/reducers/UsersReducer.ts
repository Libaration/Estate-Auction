import {
  FAILED_LOGIN,
  LOGIN_SUCCESS,
  LOGOUT,
  TRY_LOGIN,
  User,
  UserActionDispatchTypes,
} from '../actions/UserActionTypes';

interface IDefaultState {
  loading: boolean;
  isLoggedIn: boolean;
  user?: User;
}

const defaultState: IDefaultState = { loading: false, isLoggedIn: false };

const UsersReducer = (
  state: IDefaultState = defaultState,
  action: UserActionDispatchTypes
) => {
  switch (action.type) {
    case TRY_LOGIN:
      return { ...state, loading: true, isLoggedIn: false };
    case LOGIN_SUCCESS:
      return { ...action.payload, loading: false, isLoggedIn: true };
    case FAILED_LOGIN:
      return { isLoggedIn: false, loading: false };
    case LOGOUT:
      return { isLoggedIn: false, loading: false };
    default:
      return state;
  }
};
export default UsersReducer;
