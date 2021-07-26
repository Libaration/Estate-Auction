const API = 'http://localhost:3030/homes';
const APIUsers = 'http://localhost:3030/users';
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

export const fetchUserHomes = (id) => {
  return async (dispatch) => {
    dispatch({ type: 'LOADING' });
    let response = await fetch(`${APIUsers}/${id}/homes`);
    let responseJSON = await response.json();
    dispatch({
      type: 'FETCH_USER_HOMES',
      payload: responseJSON,
    });
  };
};

export const placeBid = (homeId, bid) => {
  return async (dispatch) => {
    dispatch({ type: 'LOADING' });
    let response = await fetch(`${API}/${homeId}/bid`, {
      method: 'POST',
      body: JSON.stringify({
        id: homeId,
        bid: bid,
      }),
      headers: {
        Authorization: localStorage.getItem('token'),
        'Content-type': 'application/json',
      },
    });
    let responseJSON = await response.json();
    dispatch({ type: 'PLACE_BID', payload: responseJSON });
  };
};

export const createHome = ({
  address,
  url,
  endDate,
  bathrooms,
  bedrooms,
  zoning,
}) => {
  return async (dispatch) => {
    dispatch({ type: 'LOADING' });
    let response = await fetch(`${API}`, {
      method: 'POST',
      body: JSON.stringify({
        address,
        url,
        bathrooms,
        bedrooms,
        zoning,
        endDate,
      }),
      headers: {
        Authorization: localStorage.getItem('token'),
        'Content-type': 'application/json',
      },
    });
    let responseJSON = await response.json();
  };
};

export const sortBy = (sortMethod) => {
  return { type: 'SORT_HOMES', payload: sortMethod };
};
