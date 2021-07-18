const API = 'http://localhost:3030/homes';
export const fetchHomes = () => {
  return async (dispatch) => {
    dispatch({ type: 'LOADING' });
    let response = await fetch(API);
    let responseJSON = await response.json();
    dispatch({ type: 'FETCH_HOMES', payload: responseJSON });
  };
};