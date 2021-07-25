import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserDetails from '../components/user/UserDetails';

interface Props {
  user: {
    username: string;
    id: number;
    readonly created_at: string;
    url: string;
  };
}

class UserContainer extends Component<Props> {
  componentDidMount() {}
  render() {
    return (
      <>
        <div className="userShowField">
          <div className="homeShowCard">
            <UserDetails user={this.props.user} />
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

export default connect(mapStateToProps)(UserContainer);
