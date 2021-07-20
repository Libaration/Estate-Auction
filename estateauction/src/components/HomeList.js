import React from 'react';
import Home from '../components/Home';
import { withRouter } from 'react-router';
import Masonry from 'react-masonry-css';
function HomeList(props) {
  const renderHomes = () => {
    const { homes } = props.homes;
    return homes.map((home) => {
      return (
        <div key={home.id}>
          <Home home={home} key={home.id} />
        </div>
      );
    });
  };

  return (
    // <Masonry
    //   breakpointCols={3}
    //   className="my-masonry-grid"
    //   columnClassName="my-masonry-grid_column"
    // >

    <>{renderHomes()}</>
    /* </Masonry> */
  );
}

export default withRouter(HomeList);
