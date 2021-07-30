import React from 'react';
import { Home } from '../../../actions/HomeActionTypes';
interface Props {
  home: Home;
}

const HomeMap = (props: Props) => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const { home } = props;
  return (
    <div className="embedMap">
      <iframe
        title="map"
        style={{ border: 'none', width: '1266px' }}
        src={`https://www.google.com/maps/embed/v1/search?q=${escape(
          home.address
        )}&key=${API_KEY}`}
      ></iframe>
    </div>
  );
};

export default HomeMap;
