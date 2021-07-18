const usersReducer = (state = { user: '', token: '' }, action) => {
  switch (action.type) {
    case 'FETCH_LOGIN':
      return { user: action.payload };
    default:
      return state;
  }
};
export default usersReducer;
