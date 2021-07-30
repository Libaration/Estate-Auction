import {
  FETCH_HOMES,
  FETCH_USER_HOMES,
  HomeActionDispatchTypes,
  LOADING,
  PLACE_BID,
  SORT_HOMES,
} from '../actions/HomeActionTypes';
interface IDefaultState {
  loading: boolean;
  sortedBy: string;
}

const defaultState: IDefaultState = { loading: false, sortedBy: '' };

const HomesReducer = (
  state: IDefaultState = defaultState,
  action: HomeActionDispatchTypes
) => {
  switch (action.type) {
    case FETCH_HOMES:
      return {
        homesList: action.payload,
        loading: false,
        sortedBy: state.sortedBy,
      };
    case PLACE_BID:
      return {
        ...action.payload,
        loading: false,
        sortedBy: state.sortedBy,
      };
    case SORT_HOMES:
      return {
        ...state,
        loading: state.loading,
        sortedBy: action.payload,
      };

    case FETCH_USER_HOMES:
      return {
        homesList: action.payload,
        loading: false,
        sortedBy: state.sortedBy,
      };

    case LOADING:
      return {
        ...state,
        loading: true,
        sortedBy: state.sortedBy,
      };
    default:
      return state;
  }
};

export default HomesReducer;
