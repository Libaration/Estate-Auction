import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHomes, sortBy } from '../actions/HomeActions';
import { Home } from '../actions/HomeActionTypes';
import HomeList from '../components/pages/homes/index';

interface Props {
  fetchHomes: () => void;
  sortBy: (sortType: string) => void;
  loading: boolean;
  sortedBy: string;
  homes: {
    homesList: Home[];
  };
}
interface State {
  homes: {
    homesList: Home[];
  };
}
class HomeContainer extends Component<Props> {
  componentDidMount() {
    this.props.fetchHomes();
  }

  render() {
    const isLoading: boolean = this.props.loading;
    return (
      <>
        {isLoading ? (
          '...loading'
        ) : (
          <HomeList
            sortedBy={this.props.sortedBy}
            homes={this.props.homes.homesList}
            sortHomes={this.props.sortBy}
          />
        )}
      </>
    );
  }
}
const mapStateToProps = (state: State) => {
  return {
    homes: state.homes,
  };
};
export default connect(mapStateToProps, { fetchHomes, sortBy })(HomeContainer);
