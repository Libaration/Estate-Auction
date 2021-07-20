import './App.css';
import Navbar from './components/Navbar';
import { Route, Redirect, Switch } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import HomeShow from './components/HomeShow';
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
      <Switch>
        <PrivateRoute exact path="/homes/:homeId" component={HomeShow} />
        <PrivateRoute exact path="/homes" component={HomeContainer} />
      </Switch>

      <Route exact path="/" component={() => <div>HOMEHOMEHOMEHOME</div>} />
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
