import {
  UserActionDispatchTypes,
  TRY_LOGIN,
  LOGIN_SUCCESS,
  LOGOUT,
  FAILED_LOGIN,
  Users,
} from './UserActionTypes';
import { Dispatch } from 'redux';

const API = 'http://localhost:3030/';
export const login =
  (user: string) => async (dispatch: Dispatch<UserActionDispatchTypes>) => {
    try {
      dispatch({ type: TRY_LOGIN });
      let response = await fetch(`${API}/login`, {
        method: 'POST',
        body: JSON.stringify({
          user: user,
        }),
        headers: { 'Content-type': 'application/json' },
      });
      let responseJSON: Users = await response.json();
      localStorage.setItem('token', responseJSON.token);
      dispatch({ type: LOGIN_SUCCESS, payload: responseJSON.user });
    } catch {
      dispatch({ type: FAILED_LOGIN });
    }
  };

export const authenticateToken =
  (token: string) => async (dispatch: Dispatch<UserActionDispatchTypes>) => {
    try {
      let response = await fetch(`${API}/login`, {
        headers: { Authorization: token },
      });
      let responseJSON: Users = await response.json();
      dispatch({ type: LOGIN_SUCCESS, payload: responseJSON.user });
    } catch {
      dispatch({ type: FAILED_LOGIN });
    }
  };

export const logout = () => (dispatch: Dispatch<UserActionDispatchTypes>) => {
  dispatch({ type: LOGOUT });
};
