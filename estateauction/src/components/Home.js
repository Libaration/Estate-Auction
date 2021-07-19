import React from 'react';
import numberWithCommas from '../helpers/numbersHelper';

export default function Home(props) {
  const { home } = props;
  return (
    <div className="homeCard">
      <img src={home.url} alt="home" />
      <div className="caption">
        <b>Current Bid:</b> {numberWithCommas(home.bid)}
      </div>
    </div>
  );
}
