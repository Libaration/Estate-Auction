import {
  FETCH_HOMES,
  FETCH_USER_HOMES,
  HomeActionDispatchTypes,
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
        ...action.payload,
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
        ...action.payload,
        loading: false,
        sortedBy: state.sortedBy,
      };
    default:
      return state;
  }
};

export default HomesReducer;
