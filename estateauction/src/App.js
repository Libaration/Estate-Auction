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

  const isLoggedIn = () => {
    if (props.loggedIn === false) {
      return <Redirect to="/login" />;
    }
  };
  return (
    <div className="App">
      <Navbar loggedIn={props.loggedIn} />
      {isLoggedIn()}
      <Switch>
        <Route exact path="/">
          <HomeContainer />
        </Route>
        <Route
          exact
          path="/login"
          render={(fetchLogin) => <Login fetchLogin={props.fetchLogin} />}
        />
        <PrivateRoute
          path="/logout"
          component={() => {
            props.logoutUser();
            return <Redirect to="/" />;
          }}
        />
      </Switch>
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
