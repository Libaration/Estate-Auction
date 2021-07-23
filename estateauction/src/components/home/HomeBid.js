import React from 'react';
import cancel from '../../icons/cancel.png';
import { motion } from 'framer-motion';
export default function HomeBid(props) {
  return (
    <div className="bidOverlay">
      <motion.div
        transition={{ duration: 0.1 }}
        animate={{ y: 0 }}
        initial={{ y: -1500 }}
        exit={{ y: -1500 }}
      >
        <div className="bidCard">
          <div className="cancelIcon">
            <img src={cancel} alt="cancel" onClick={props.toggleVisible} />
          </div>
          Amount:
          <br />
          <input type="text" />
          <button>Place Bid</button>
        </div>{' '}
      </motion.div>
    </div>
  );
}
