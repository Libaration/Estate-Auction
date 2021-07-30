import React from 'react';
import { Home } from '../../../actions/HomeActionTypes';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import numberWithCommas from '../../../helpers/helpers';
import HomeCountdown from './countdown';

interface Props {
  home: Home;
  viewOptions: {
    willShowBids: boolean;
    willShowCountdown: boolean;
  };
}

export const Show = (props: Props) => {
  const { home, viewOptions } = props;
  const imageRoute = `/homes/${home.id}`;

  const renderBids = () => {
    return (
      <div className="caption">
        <div className="bidDetails">
          Current Bid:{' '}
          <span className="bid">${numberWithCommas(home.bid)}</span>
        </div>
      </div>
    );
  };

  const renderCountDown = () => {
    return <HomeCountdown home={home} />;
  };
  return (
    <div className="card">
      <Link to={imageRoute}>
        <motion.div transition={{ duration: 0.5 }} whileHover={{ scale: 1.1 }}>
          <img src={home.url} alt="home" />
        </motion.div>
      </Link>
      {viewOptions.willShowBids ? renderBids() : ''}
      {viewOptions.willShowCountdown ? renderCountDown() : ''}
    </div>
  );
};

export default Show;
