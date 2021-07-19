import './App.css';
import Navbar from './components/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import Login from './components/Login';
import { connect } from 'react-redux';
import {
  fetchLogin,
  authenticateToken,
  logoutUser,
} from './actions/usersAction';
import { PrivateRoute } from './components/PrivateRoute';
import { useEffect } from 'react';

function App(props) {
  useEffect(() => {
    if (localStorage.token && props.loggedIn === false) {
      props.authenticateToken(localStorage.getItem('token'));
    }
  }, [props]);
  return (
    <div className="App">
      <Navbar loggedIn={props.loggedIn} />
      <PrivateRoute exact path="/homes" component={HomeContainer} />
      <Route
        exact
        path="/login"
        render={(fetchLogin) => <Login fetchLogin={props.fetchLogin} />}
      />
      <PrivateRoute
        exact
        path="/logout"
        component={() => {
          props.logoutUser();
          return <Redirect to="/" />;
        }}
      />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    loggedIn: state.user.loggedIn,
    user: state.user,
  };
};

export default connect(mapStateToProps, {
  fetchLogin,
  authenticateToken,
  logoutUser,
})(App);
