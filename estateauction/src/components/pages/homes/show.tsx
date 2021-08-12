import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { fetchHomes, placeBid } from '../../../actions/HomeActions';
import { Home } from '../../../actions/HomeActionTypes';
import HomeMap from './HomeMap';
import HomeDetails from './HomeDetails';
import { motion } from 'framer-motion';
import HomeBid from './Bid';

interface MatchParams {
  homeId: string;
}

interface Props extends RouteComponentProps<MatchParams> {
  homes: {
    homesList: Home[];
    loading: boolean;
  };

  fetchHomes: (homeId: string) => void;
  placeBid: (homeId: number, value: number, url: string) => void;
}
interface State {
  bidPage: {
    visible: boolean;
  };
}

class Show extends Component<Props, State> {
  state = {
    bidPage: {
      visible: false,
    },
  };
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
    const home: Home = this.props.homes.homesList[0];
    return (
      <div className="homeShowCard">
        <HomeDetails home={home} toggleVisible={this.toggleVisible} />
        <HomeMap home={home} />
      </div>
    );
  };

  render() {
    const home = this.props.homes.homesList[0];
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
          {this.props.homes.homesList.length > 0
            ? this.renderHome()
            : 'loading....'}
        </div>
      </motion.div>
    );
  }
}
const mapStateToProps = (state: Props) => {
  return {
    homes: {
      ...state.homes,
    },
  };
};
export default connect(mapStateToProps, { fetchHomes, placeBid })(Show);
