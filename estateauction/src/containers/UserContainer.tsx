import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserDetails from '../components/user/UserDetails';
import { fetchHomes } from '../actions/homesAction';
import Home from '../components/home/Home';
import logo from '../logo.png';

interface Props {
  user: {
    username: string;
    id: number;
    readonly created_at: string;
    url: string;
    bids?: [];
  };
  homes: { homes: Homes[] };
  fetchHomes: (id: string) => void;
}
interface Homes {
  id: number;
  address: string;
}

class UserContainer extends Component<Props> {
  componentDidMount() {
    const { user } = this.props;
    this.props.fetchHomes((user.id as unknown as string) || 'all');
  }

  renderHomes = () => {
    return (
      <>
        {this.props.homes.homes.map((home) => {
          return (
            <Home
              key={home.id}
              home={home}
              viewOptions={{ willShowBids: false, willShowCountdown: false }}
            />
          );
        })}
      </>
    );
  };
  render() {
    const { homes } = this.props.homes;
    const haveHomesLoaded: boolean = !!homes.length ? true : false;
    return (
      <>
        <div className="userShowField">
          <div className="homeShowCard">
            <div className="userShowLogo">
              <img src={logo} alt="logo" />
            </div>
            <UserDetails user={this.props.user} />
            <div className="myHomes">
              {haveHomesLoaded ? this.renderHomes() : '....Loading'}
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state: Props) => {
  return {
    user: state.user,
    homes: state.homes,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchHomes: (id: string | undefined) => dispatch(fetchHomes(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
