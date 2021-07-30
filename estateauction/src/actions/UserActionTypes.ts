export const TRY_LOGIN = 'TRY_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const FAILED_LOGIN = 'FAILED_LOGIN';
export const LOGOUT = 'LOGOUT';

export interface User {
  id: number;
  username: string;
  url: string;
  created_at: string;
  bids: Bid[];
  loading: boolean;
  isLoggedIn: boolean;
}

export interface Users {
  user: User;
  token: string;
}

export interface Bid {
  id: number;
  amount: number;
  user: string;
  created_at: string;
}

export interface TryLogin {
  type: typeof TRY_LOGIN;
}

export interface LoginSuccess {
  type: typeof LOGIN_SUCCESS;
  payload: User;
}

export interface FailedLogin {
  type: typeof FAILED_LOGIN;
}

export interface Logout {
  type: typeof LOGOUT;
}

export type UserActionDispatchTypes =
  | TryLogin
  | LoginSuccess
  | FailedLogin
  | Logout;
