import React from 'react';
import Home from '../components/home/Home';
import { withRouter } from 'react-router';
import { motion } from 'framer-motion';
import endingsoon from '../icons/endingsoon.png';
import newbadge from '../icons/newbadge.png';

import moment from 'moment';
function HomeList(props) {
  const renderHomes = () => {
    let homesList;
    switch (props.sortedBy) {
      case 'endingSoon':
        homesList = {
          homes: props.homes.homes.sort(
            (a, b) =>
              moment(a.endDate).format('YYYYMMDDHHmm') -
              moment(b.endDate).format('YYYYMMDDHHmm')
          ),
        };
        break;
      case 'recentlyCreated':
        homesList = {
          homes: props.homes.homes.sort(
            (a, b) =>
              moment(b.createdAt).format('YYYYMMDDHHmm') -
              moment(a.createdAt).format('YYYYMMDDHHmm')
          ),
        };
        break;
      default:
        homesList = props.homes;
    }
    const { homes } = homesList;
    return homes.map((home) => {
      return (
        <div className="homeCards" key={home.id}>
          <Home
            home={home}
            key={home.id}
            viewOptions={{ willShowBids: true, willShowCountdown: true }}
          />
        </div>
      );
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: 15 }}
      transition={{ duration: 0.1 }}
    >
      <div className="sortingoptions">
        <div class="sorttext">Sort: </div>
        <img
          src={endingsoon}
          alt="sort by time left"
          onClick={() => props.sortAction('endingSoon')}
        />{' '}
        <img
          src={newbadge}
          alt="sort by newest created"
          onClick={() => props.sortAction('recentlyCreated')}
        />
      </div>

      <div className="homesContainer">{renderHomes()}</div>
    </motion.div>
  );
}

export default HomeList;
