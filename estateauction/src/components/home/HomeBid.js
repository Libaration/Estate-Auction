import React from 'react';
import cancel from '../../icons/cancel.png';
import { motion } from 'framer-motion';
import bidding from '../../icons/bidding.png';
import { useState } from 'react';

import numberWithCommas from '../../helpers/numbersHelper';
export default function HomeBid(props) {
  const [value, setValue] = useState('');
  const onChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    if (value <= 0) {
      setValue('Must be greater than 0');
    } else {
      props.placeBid(props.home.id, value);
      setValue('');
    }
  };

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
              Recent Bids:
            </div>
            <br />
            {props.home.bids && props.home.bids.length > 0 ? (
              renderBids()
            ) : (
              <div className="bidder">Be the first to bid</div>
            )}
          </div>
          <div className="cancelIcon">
            <img src={cancel} alt="cancel" onClick={props.toggleVisible} />
          </div>
          Amount:
          <br />
          <input
            type="number"
            name="amount"
            value={value}
            onChange={onChange}
          />
          <button onClick={handleClick}>Place Bid</button>
        </div>
      </motion.div>
    </div>
  );
}
