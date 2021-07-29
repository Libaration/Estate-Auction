import React, { ReactElement, useEffect } from 'react';
import { User } from './actions/UserActionTypes';
import { authenticateToken } from './actions/UserActions';
import { connect } from 'react-redux';
import { Header } from './components/pages/Header';
import SideNav from './components/pages/SideNav';

interface Props {
  user: User;
  authenticateToken: (token: string) => void;
  login: () => void;
}

function App(props: Props): ReactElement {
  const { authenticateToken } = props;
  useEffect(() => {
    let token = localStorage.getItem('token');
    if (token) {
      authenticateToken(token);
    }
  }, [authenticateToken]);
  console.log('Props coming from App.tsx', props);
  return (
    <div className="App">
      <Header />
      <SideNav isLoggedIn={props.user.isLoggedIn} />
    </div>
  );
}
const mapStateToProps = (state: Props) => {
  return {
    ...state,
    user: state.user,
  };
};
export default connect(mapStateToProps, { authenticateToken })(App);
