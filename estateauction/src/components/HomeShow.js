import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHomes, placeBid } from '../actions/homesAction';
import { motion } from 'framer-motion';
import HomeDetails from './home/HomeDetails';
import HomeMap from './home/HomeMap';
import HomeBid from './home/HomeBid';

class HomeShow extends Component {
  constructor() {
    super();
    this.state = {
      bidPage: {
        visible: false,
      },
    };
  }

  toggleVisible = () => {
    this.setState((prevState) => {
      return {
        bidPage: {
          visible: !prevState.bidPage.visible,
        },
      };
    });
  };
  componentDidMount() {
    const { homeId } = this.props.match.params;
    this.props.fetchHomes(homeId);
  }
  renderHome = () => {
    const home = this.props.homes.homes[0];

    return (
      <div className="homeShowCard">
        <HomeDetails home={home} toggleVisible={this.toggleVisible} />
        <HomeMap home={home} />
      </div>
    );
  };

  render() {
    const home = this.props.homes.homes[0];
    return (
      <motion.div
        transition={{ duration: 0.1 }}
        animate={{ scale: 1 }}
        initial={{ scale: 0 }}
        exit={{ scale: 0 }}
      >
        {this.state.bidPage.visible ? (
          <HomeBid
            home={home}
            toggleVisible={this.toggleVisible}
            placeBid={this.props.placeBid}
          />
        ) : (
          ''
        )}
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
    homes: state.homes,
  };
};
export default connect(mapStateToProps, { fetchHomes, placeBid })(HomeShow);
