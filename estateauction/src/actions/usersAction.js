export const fetchLogin = (user) => {
  return {
    type: 'FETCH_LOGIN',
    payload: user,
  };
};
