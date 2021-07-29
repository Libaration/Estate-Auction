export const checkLogin = (props) => {
  if (localStorage.token && props.isLoggedIn === false) {
    props.authenticateToken(localStorage.getItem('token'));
  }
};
