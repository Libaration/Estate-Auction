import React from 'react';
import numberWithCommas from '../../helpers/numbersHelper';
import { Link } from 'react-router-dom';

export default function Home(props) {
  const { home } = props;
  const imageRoute = `/homes/${home.id}`;
  return (
    <div className="homeCard">
      <Link to={imageRoute}>
        <img src={home.url} alt="home" />
      </Link>
      <div className="caption">
        <b>Current Bid:</b> <span>${numberWithCommas(home.bid)}</span>
      </div>
    </div>
  );
}
