export const checkLogin = (props) => {
  if (localStorage.token && props.loggedIn === false) {
    props.authenticateToken(localStorage.getItem('token'));
  }
};
