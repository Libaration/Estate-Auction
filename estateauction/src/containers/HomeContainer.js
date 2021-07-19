import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHomes } from '../actions/homesAction';
import HomeList from '../components/HomeList';
class HomeContainer extends Component {
  componentDidMount() {
    this.props.fetchHomes();
  }

  render() {
    return (
      <div className="homesContainer">
        {this.props.homes.loading === true ? (
          'loading'
        ) : (
          <HomeList homes={this.props.homes} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user, homes: state.homes };
};

export default connect(mapStateToProps, { fetchHomes })(HomeContainer);
