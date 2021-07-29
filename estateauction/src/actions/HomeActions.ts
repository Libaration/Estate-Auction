import { Dispatch } from 'redux';
import {
  HomeActionDispatchTypes,
  LOADING,
  FETCH_HOMES,
  FAILED_FETCH,
  FETCH_USER_HOMES,
  PLACE_BID,
  SORT_HOMES,
} from './HomeActionTypes';
const API = 'http://localhost:3030/homes';
const APIUsers = 'http://localhost:3030/users';
const token: string = localStorage.getItem('token') || 'invalidJWT';
export const fetchHomes =
  (id: string = 'all') =>
  async (dispatch: Dispatch<HomeActionDispatchTypes>) => {
    dispatch({ type: LOADING });
    try {
      let response =
        id === 'all' ? await fetch(API) : await fetch(`${API}/${id}`);
      let responseJSON = await response.json();
      dispatch({ type: FETCH_HOMES, payload: responseJSON });
    } catch {
      dispatch({ type: FAILED_FETCH });
    }
  };

export const fetchUserHomes =
  (id: string) => async (dispatch: Dispatch<HomeActionDispatchTypes>) => {
    dispatch({ type: LOADING });
    try {
      let response = await fetch(`${APIUsers}/${id}/homes`);
      let responseJSON = await response.json();
      dispatch({ type: FETCH_USER_HOMES, payload: responseJSON });
    } catch {
      dispatch({ type: FAILED_FETCH });
    }
  };

export const placeBid =
  (homeId: number, bid: number) =>
  async (dispatch: Dispatch<HomeActionDispatchTypes>) => {
    dispatch({ type: LOADING });
    try {
      let response = await fetch(`${API}/${homeId}/bid`, {
        method: 'POST',
        body: JSON.stringify({
          id: homeId,
          bid: bid,
        }),
        headers: {
          Authorization: token,
          'Content-type': 'application/json',
        },
      });
      let responseJSON = await response.json();
      dispatch({ type: PLACE_BID, payload: responseJSON });
    } catch {
      dispatch({ type: FAILED_FETCH });
    }
  };

interface newHome {
  details?: string;
  address: string;
  url: string;
  endDate: string;
  bathrooms: string;
  bedrooms: string;
  zoning: string;
}
export const createHome =
  ({ address, url, bathrooms, bedrooms, zoning, endDate }: newHome) =>
  async (dispatch: Dispatch<HomeActionDispatchTypes>) => {
    dispatch({ type: LOADING });
    try {
      let response = await fetch(`${API}`, {
        method: 'POST',
        body: JSON.stringify({
          address,
          url,
          bathrooms,
          bedrooms,
          zoning,
          endDate,
        }),
        headers: {
          Authorization: token,
          'Content-type': 'application/json',
        },
      });
    } catch {
      dispatch({ type: FAILED_FETCH });
    }
  };

export const sortBy =
  (sortMethod: string) => (dispatch: Dispatch<HomeActionDispatchTypes>) => {
    dispatch({ type: SORT_HOMES, payload: sortMethod });
  };
