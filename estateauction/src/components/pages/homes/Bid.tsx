import React, { FormEvent } from 'react';
import { useState } from 'react';
import { Home } from '../../../actions/HomeActionTypes';
import { Bid as IBid } from '../../../actions/UserActionTypes';
import numberWithCommas from '../../../helpers/helpers';
import { motion } from 'framer-motion';
import cancel from '../../../icons/cancel.png';
import dollar from '../../../icons/dollar.png';
import bidding from '../../../icons/bidding.png';
import { withRouter, RouteComponentProps } from 'react-router-dom';
interface Props extends RouteComponentProps {
  placeBid: (homeId: number, value: number, url: string) => void;
  toggleVisible: () => void;
  home: Home;
}

const Bid = (props: Props) => {
  const [value, setValue] = useState('');
  const onChange = (event: FormEvent) => {
    setValue((event.target as HTMLInputElement).value);
  };
  const handleClick = () => {
    if (parseInt(value) <= 0) {
      setValue('Must be greater than 0');
    } else {
      props.placeBid(props.home.id, parseInt(value), props.location.pathname);
      setValue('');
    }
  };
  const renderBids = () => {
    return props.home.bids.map((bid: IBid) => {
      return (
        <div className="bidder" key={bid.id}>
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
          <div className="dollarInput">
            <img src={dollar} alt="dollar" />
          </div>
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
};

export default withRouter(Bid);
