import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHomes } from '../actions/homesAction';
import Home from '../components/Home';
class HomeContainer extends Component {
  componentDidMount() {
    this.props.fetchHomes();
  }

  renderHomes = () => {
    const { homes } = this.props.homes;
    return homes.map((home) => {
      return <Home home={home} key={home.id} />;
    });
  };
  render() {
    return (
      <div className="homesContainer">
        {this.props.homes.loading === true ? 'loading' : this.renderHomes()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user, homes: state.homes };
};

export default connect(mapStateToProps, { fetchHomes })(HomeContainer);
