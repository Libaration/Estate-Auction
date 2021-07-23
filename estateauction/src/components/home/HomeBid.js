import React from 'react';
import cancel from '../../icons/cancel.png';
import { motion } from 'framer-motion';
import bidding from '../../icons/bidding.png';

import numberWithCommas from '../../helpers/numbersHelper';
export default function HomeBid(props) {
  const renderBids = () => {
    return props.home.bids.map((bid) => {
      return (
        <div className="bidder">
          <ul>
            <li>
              ${numberWithCommas(bid.amount)} by: {bid.user}
            </li>
          </ul>
        </div>
      );
    });
  };
  return (
    <div className="bidOverlay">
      <motion.div
        transition={{ duration: 0.1 }}
        animate={{ y: 0 }}
        initial={{ y: -1500 }}
        exit={{ y: -1500 }}
      >
        <div className="bidCard">
          <div className="bidList">
            <div className="mostRecent">
              <img src={bidding} alt="bidding" />
              Most Recent Bids:
            </div>
            <br />
            {renderBids()}
          </div>
          <div className="cancelIcon">
            <img src={cancel} alt="cancel" onClick={props.toggleVisible} />
          </div>
          Amount:
          <br />
          <input type="text" />
          <button>Place Bid</button>
        </div>
      </motion.div>
    </div>
  );
}
