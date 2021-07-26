import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserDetails from '../components/user/UserDetails';
import { fetchHomes } from '../actions/homesAction';

interface Props {
  user: {
    username: string;
    id: number;
    readonly created_at: string;
    url: string;
    bids?: [];
  };
  homes: {
    id: number;
    address: string;
  };
  fetchHomes: (id: string) => void;
}

class UserContainer extends Component<Props> {
  componentDidMount() {
    const { user } = this.props;
    this.props.fetchHomes(user.id as unknown as string);
  }
  render() {
    return (
      <>
        <div className="userShowField">
          <div className="homeShowCard">
            <UserDetails user={this.props.user} />
            <div className="myHomes">esdkdnkdnkdnekdnk</div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state: Props) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchHomes: (id: string | undefined) => dispatch(fetchHomes(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
