import './App.css';
import Header from './components/Header';
import { Route, Redirect, Switch, useLocation } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import HomeShow from './components/HomeShow';
import Login from './components/Login';
import { connect } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import AddHome from './components/AddHome';
import SideNav from './components/SideNav';
import Landing from './components/Landing';
import { checkLogin } from './helpers/checkLogin';
import UserContainer from './containers/UserContainer';

import {
  fetchLogin,
  authenticateToken,
  logoutUser,
} from './actions/usersAction';
import { PrivateRoute } from './components/PrivateRoute';
import { useEffect } from 'react';

function App(props) {
  const location = useLocation();
  useEffect(() => {
    checkLogin(props);
  }, [props]);
  return (
    <div className="App">
      <Header />
      <SideNav loggedIn={props.loggedIn} />
      <PrivateRoute
        exact
        path="/logout"
        component={() => {
          props.logoutUser();
          return <Redirect to="/" />;
        }}
      />
      <AnimatePresence>
        <Route
          exact
          path="/login"
          render={(fetchLogin) => <Login fetchLogin={props.fetchLogin} />}
        />
        <Switch location={location} key={location.pathname}>
          <PrivateRoute exact path="/homes/add" component={AddHome} />
          <PrivateRoute exact path="/homes/:homeId" component={HomeShow} />
          <PrivateRoute exact path="/homes" component={HomeContainer} />
          <PrivateRoute exact path="/profile" component={UserContainer} />
          <Route exact path="/" component={Landing} />
        </Switch>
      </AnimatePresence>
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
