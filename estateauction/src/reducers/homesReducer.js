const homesReducer = (state = { homes: [], loading: false }, action) => {
  switch (action.type) {
    case 'LOADING':
      return { ...state, loading: true };
    case 'FETCH_HOMES':
      return {
        homes: action.payload,
        loading: false,
      };
    case 'PLACE_BID':
      return {
        homes: [action.payload],
        loading: false,
      };
    default:
      return state;
  }
};
export default homesReducer;
