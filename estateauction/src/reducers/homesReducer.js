const homesReducer = (
  state = { homes: [], loading: false, sortedBy: '' },
  action
) => {
  switch (action.type) {
    case 'LOADING':
      return { ...state, loading: true, sortedBy: state.sortedBy };
    case 'FETCH_HOMES':
      return {
        homes: action.payload,
        loading: false,
        sortedBy: state.sortedBy,
      };
    case 'PLACE_BID':
      return {
        homes: [action.payload],
        loading: false,
        sortedBy: state.sortedBy,
      };
    case 'SORT_HOMES':
      return {
        ...state,
        homes: [...state.homes],
        loading: state.loading,
        sortedBy: action.payload,
      };
    default:
      return state;
  }
};
export default homesReducer;
