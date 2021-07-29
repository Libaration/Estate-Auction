import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHomes, sortBy } from '../actions/HomeActions';
import { Home } from '../actions/HomeActionTypes';

interface Props {
  fetchHomes: () => void;
  homes: Home[];
}
interface State {
  homes: Home[];
}

class HomeContainer extends Component<Props> {
  componentDidMount() {
    this.props.fetchHomes();
  }
  render() {
    return <div></div>;
  }
}
const mapStateToProps = (state: State) => {
  return {
    ...state.homes,
  };
};
export default connect(mapStateToProps, { fetchHomes })(HomeContainer);
