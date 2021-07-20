import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHome } from '../actions/homesAction';
import { motion } from 'framer-motion';
import numberWithCommas from '../helpers/numbersHelper';

class HomeShow extends Component {
  componentDidMount() {
    const { homeId } = this.props.match.params;
    this.props.fetchHome(homeId);
  }
  renderHome = () => {
    const home = this.props.homes.homes[0];
    return (
      <div className="homeShowCard">
        <div className="bid">
          <b>Current Bid: ${numberWithCommas(home.bid)}</b>
        </div>
        <b>Address:</b> {home.address}
      </div>
    );
  };

  render() {
    return (
      <motion.div
        transition={{ duration: 0.1 }}
        animate={{ scale: 1 }}
        initial={{ scale: 0 }}
        exit={{ scale: 0 }}
      >
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
