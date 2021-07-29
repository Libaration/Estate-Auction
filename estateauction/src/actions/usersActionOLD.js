const API = 'http://localhost:3030/';
export const fetchLogin = (user) => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_LOGIN', payload: user });
    let response = await fetch(`${API}/login`, {
      method: 'POST',
      body: JSON.stringify({
        user: user,
      }),
      headers: { 'Content-type': 'application/json' },
    });
    let responseJSON = await response.json();
    if (responseJSON.token) {
      localStorage.setItem('token', responseJSON.token);
      dispatch({ type: 'LOGIN', payload: responseJSON.user });
    } else {
      dispatch({ type: 'FAILED_LOGIN' });
    }
  };
};

export const authenticateToken = (token) => {
  return async (dispatch) => {
    let response = await fetch(`${API}/login`, {
      headers: { Authorization: token },
    });
    let responseJSON = await response.json();
    if (responseJSON.token) {
      dispatch({ type: 'LOGIN', payload: responseJSON.user });
    } else {
      dispatch({ type: 'FAILED_LOGIN' });
    }
  };
};

export const logoutUser = () => {
  localStorage.removeItem('token');
  return {
    type: 'LOG_OUT',
  };
};
