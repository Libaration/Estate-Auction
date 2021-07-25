import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { throwStatement } from '@babel/types';

interface State {
  user: {
    username: string;
    id: number;
    readonly created_at: string;
  };
}
class UserContainer extends Component<State> {
  componentDidMount() {}
  render() {
    const {
      username,
      id,
      created_at,
    }: { username: string; id: number; created_at: string } = this.props.user;
    return (
      <>
        <div className="homeShowField">
          <div className="homeShowCard">
            Member Since: {moment(created_at).format('MM/DD/YYYY')}
            <br />
            Username: {username}
            <br />
            Member ID: {id}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(UserContainer);
