import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHomes } from '../actions/homesAction';
import Home from '../components/Home';
import Masonry from 'react-masonry-css';
class HomeContainer extends Component {
  componentDidMount() {
    this.props.fetchHomes();
  }

  renderHomes = () => {
    const { homes } = this.props.homes;
    return homes.map((home) => {
      return (
        <div key={home.id}>
          <Home home={home} key={home.id} />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="homesContainer">
        <Masonry
          breakpointCols={3}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {this.props.homes.loading === true ? 'loading' : this.renderHomes()}
        </Masonry>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user, homes: state.homes };
};

export default connect(mapStateToProps, { fetchHomes })(HomeContainer);
