import React from 'react';
import { sortHomesBy } from '../../../helpers/helpers';
import { Home } from '../../../actions/HomeActionTypes';
import ShowHome from './show';
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';
import endingsoon from '../../../icons/endingsoon.png';
import newbadge from '../../../icons/newbadge.png';

interface Props {
  sortedBy: string;
  sortAction: (sortType: string) => void;
  homes: Home[];
}
const index = (props: Props) => {
  const areHomesPopulated: boolean = !!props.homes;
  const renderHomes = () => {
    const { homes } = props;
    let homesList = sortHomesBy(props.sortedBy, homes);
    return homesList.map((home) => {
      return (
        <div className="homeCards" key={uuidv4()}>
          <ShowHome
            home={home}
            key={uuidv4()}
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
        <div className="sorttext">Sort: </div>
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

      <div className="homesContainer">
        {areHomesPopulated ? renderHomes() : ''}
      </div>
    </motion.div>
  );
};

export default index;
