const API = 'http://localhost:3030/homes';
export const fetchHomes = (id = 'all') => {
  return async (dispatch) => {
    dispatch({ type: 'LOADING' });
    let response =
      id === 'all' ? await fetch(API) : await fetch(`${API}/${id}`);
    let responseJSON = await response.json();
    dispatch({
      type: 'FETCH_HOMES',
      payload: id === 'all' ? responseJSON : [responseJSON],
    });
  };
};
