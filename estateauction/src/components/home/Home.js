import React from 'react';
import numberWithCommas from '../../helpers/numbersHelper';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HomeCountdown from './HomeCountdown';

export default function Home(props) {
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
  const renderCountdown = () => {
    return <HomeCountdown home={home} />;
  };
  const { home } = props;
  const imageRoute = `/homes/${home.id}`;
  const { viewOptions } = props;
  return (
    <div className="card">
      <Link to={imageRoute}>
        <motion.div transition={{ duration: 0.5 }} whileHover={{ scale: 1.1 }}>
          <img src={home.url} alt="home" />
        </motion.div>
      </Link>
      {viewOptions.willShowBids ? renderBids() : ''}
      {viewOptions.willShowCountdown ? renderCountdown() : ''}
    </div>
  );
}
