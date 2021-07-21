import React from 'react';
import numberWithCommas from '../../helpers/numbersHelper';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home(props) {
  const { home } = props;
  const imageRoute = `/homes/${home.id}`;
  return (
    <div className="card">
      <Link to={imageRoute}>
        <motion.div transition={{ duration: 0.5 }} whileHover={{ scale: 1.4 }}>
          <img src={home.url} alt="home" />
        </motion.div>
      </Link>
      <div className="caption">
        <div className="bidDetails">
          Current Bid:{' '}
          <span className="bid">${numberWithCommas(home.bid)}</span>
          <br />
        </div>
      </div>
    </div>
  );
}
