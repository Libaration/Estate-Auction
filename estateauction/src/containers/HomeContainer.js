import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHomes, sortBy } from '../actions/homesAction';
import HomeList from '../components/HomeList';
class HomeContainer extends Component {
  componentDidMount() {
    this.props.fetchHomes();
  }

  render() {
    return (
      <>
        {this.props.homes.loading === true ? (
          ''
        ) : (
          <HomeList
            homes={this.props.homes}
            sortedBy={this.props.homes.sortedBy}
            sortAction={this.props.sortBy}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { homes: state.homes };
};

export default connect(mapStateToProps, { fetchHomes, sortBy })(HomeContainer);
