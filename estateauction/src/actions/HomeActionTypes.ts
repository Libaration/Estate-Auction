import { Bid } from '../actions/UserActionTypes';
export const LOADING = 'LOADING';
export const FETCH_HOMES = 'FETCH_HOMES';
export const FETCH_USER_HOMES = 'FETCH_USER_HOMES';
export const SORT_HOMES = 'SORT_HOMES';
export const PLACE_BID = 'PLACE_BID';
export const FAILED_FETCH = 'FAILED_FETCH';

export interface Home {
  id: number;
  address: string;
  bid: number;
  url: string;
  details: string;
  bathrooms: number;
  bedrooms: number;
  zoning: string;
  bids: Bid[];
  endDate: string;
}

export interface Loading {
  type: typeof LOADING;
}

export interface FetchHomes {
  type: typeof FETCH_HOMES;
  payload: Home[] | Home;
}

export interface FetchUserHome {
  type: typeof FETCH_USER_HOMES;
  payload: Home[] | Home;
}

export interface PlaceBid {
  type: typeof PLACE_BID;
  payload: Home;
}

export interface SortHomes {
  type: typeof SORT_HOMES;
  payload: string;
}

export interface FailedFetch {
  type: typeof FAILED_FETCH;
}

export type HomeActionDispatchTypes =
  | Loading
  | FetchHomes
  | FetchUserHome
  | PlaceBid
  | FailedFetch
  | SortHomes;
