import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHome } from '../actions/homesAction';
import { motion } from 'framer-motion';
import SideNav from './SideNav';
import HomeDetails from './home/HomeDetails';
import HomeMap from './home/HomeMap';

class HomeShow extends Component {
  componentDidMount() {
    const { homeId } = this.props.match.params;
    this.props.fetchHome(homeId);
  }
  renderHome = () => {
    const home = this.props.homes.homes[0];

    return (
      <div className="homeShowCard">
        <HomeDetails home={home} />
        <HomeMap home={home} />
      </div>
    );
  };

  render() {
    return (
      <motion.div
        transition={{ duration: 0.2 }}
        animate={{ x: 0 }}
        initial={{ x: 1500 }}
        exit={{ x: -1500 }}
      >
        <SideNav />
        <div className="homeShowField">
          {this.props.homes.homes.length > 0
            ? this.renderHome()
            : 'loading....'}
        </div>
      </motion.div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    homes: state.homes,
  };
};
export default connect(mapStateToProps, { fetchHome })(HomeShow);
