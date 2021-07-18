import './App.css';
import Navbar from './components/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import { connect } from 'react-redux';
import {
  fetchLogin,
  authenticateToken,
  logoutUser,
} from './actions/usersAction';
import { PrivateRoute } from './components/PrivateRoute';

function App(props) {
  const isLoggedIn = () => {
    if (localStorage.getItem('token') === null) {
      return <Redirect to="/login" />;
    } else {
      props.authenticateToken(localStorage.getItem('token'));
    }
  };
  return (
    <div className="App">
      <Navbar loggedIn={props.loggedIn} />
      {isLoggedIn()}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/login"
          component={() => {
            return <Login fetchLogin={props.fetchLogin} />;
          }}
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
  };
};

export default connect(mapStateToProps, {
  fetchLogin,
  authenticateToken,
  logoutUser,
})(App);
