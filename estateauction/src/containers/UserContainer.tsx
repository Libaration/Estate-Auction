import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserDetails from '../components/user/UserDetails';
import { fetchUserHomes } from '../actions/HomeActions';
import HomeShow from '../components/pages/homes/show';
import logo from '../logo.png';
import { User } from '../actions/UserActionTypes';
import { Home } from '../actions/HomeActionTypes';

interface Props {
  user: User;
  loading: boolean;
  homes: {
    homesList: Home[];
  };
  fetchUserHomes: (id: number) => void;
}
interface State {
  user: User;
  homes: {
    homesList: Home[];
  };
}
class UserContainer extends Component<Props> {
  componentDidMount() {
    const { user } = this.props;
    this.props.fetchUserHomes(user.id);
  }

  renderHomes = () => {
    const { homes } = this.props;
    if (homes.homesList) {
      return (
        <>
          {this.props.homes.homesList.map((home) => {
            return (
              <HomeShow
                key={home.id}
                home={home}
                viewOptions={{ willShowBids: false, willShowCountdown: false }}
              />
            );
          })}
        </>
      );
    }
  };
  render() {
    const areHomesPopulated: boolean = !this.props.loading;
    return (
      <>
        <div className="userShowField">
          <div className="homeShowCard">
            <div className="userShowLogo">
              <img src={logo} alt="logo" />
            </div>
            <UserDetails user={this.props.user} />
            <div className="myHomes">
              {areHomesPopulated ? this.renderHomes() : ''}
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    ...state,
    user: state.user,
    homes: {
      ...state.homes,
    },
  };
};

export default connect(mapStateToProps, { fetchUserHomes })(UserContainer);
