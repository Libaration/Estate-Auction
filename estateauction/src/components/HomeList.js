import React from 'react';
import Home from '../components/home/Home';
import { withRouter } from 'react-router';
import { motion } from 'framer-motion';
function HomeList(props) {
  const renderHomes = () => {
    const { homes } = props.homes;
    return homes.map((home) => {
      return (
        <div className="homeCards">
          {/* <motion.div
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
          > */}
          <Home home={home} key={home.id} />
          {/* </motion.div> */}
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
      <div className="homesContainer">{renderHomes()}</div>
    </motion.div>
  );
}

export default withRouter(HomeList);
