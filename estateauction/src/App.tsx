import './App.css';
import React, { ReactElement, useEffect } from 'react';
import { PrivateRoute } from './components/PrivateRoute';
import { Route, Redirect, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { User } from './actions/UserActionTypes';
import { authenticateToken, logout, login } from './actions/UserActions';
import { isLoggedIn } from './helpers/helpers';
import { connect } from 'react-redux';
import { Header } from './components/pages/Header';
import SideNav from './components/pages/SideNav';
import Login from './components/pages/login/index';
import HomeContainer from './containers/HomeContainer';
import UserContainer from './containers/UserContainer';
import AddHome from './components/pages/homes/new';
import HomeShow from './components/pages/homes/show';

interface Props {
  user: User;
  authenticateToken: (token: string) => void;
  login: () => void;
  logout: () => void;
}

function App(props: Props): ReactElement {
  const { authenticateToken } = props;
  const location = useLocation();
  useEffect(() => {
    if (isLoggedIn()) {
      authenticateToken(localStorage.getItem('token')!);
    }
  }, [authenticateToken]);
  return (
    <div className="App">
      <Header />
      <SideNav isLoggedIn={props.user.isLoggedIn} />
      <PrivateRoute
        exact
        path="/logout"
        component={() => {
          props.logout();
          return <Redirect to="/" />;
        }}
      />
      <AnimatePresence>
        <Route
          exact
          path="/login"
          render={() => <Login login={props.login} />}
        />
        <Switch location={location} key={location.pathname}>
          <PrivateRoute exact path="/homes/add" component={AddHome} />
          <PrivateRoute exact path="/homes/:homeId" component={HomeShow} />
          <PrivateRoute exact path="/homes" component={HomeContainer} />
          <PrivateRoute exact path="/profile" component={UserContainer} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}
const mapStateToProps = (state: Props) => {
  return {
    ...state,
    user: state.user,
  };
};
export default connect(mapStateToProps, { authenticateToken, logout, login })(
  App
);
