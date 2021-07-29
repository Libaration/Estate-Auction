const usersReducer = (state = { loading: false, loggedIn: false }, action) => {
  switch (action.type) {
    case 'FETCH_LOGIN':
      return { ...state, loading: true, loggedIn: false };
    case 'LOGIN':
      return { ...action.payload, loading: false, loggedIn: true };
    case 'FAILED_LOGIN':
      return { loggedIn: false, loading: false };
    case 'LOG_OUT':
      return { loggedIn: false, loading: false };
    default:
      return state;
  }
};
export default usersReducer;
