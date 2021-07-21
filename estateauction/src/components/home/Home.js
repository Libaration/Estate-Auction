import React from 'react';
import numberWithCommas from '../../helpers/numbersHelper';
import { Link } from 'react-router-dom';
import bathroom from '../../icons/bathroom.png';

export default function Home(props) {
  const { home } = props;
  const imageRoute = `/homes/${home.id}`;
  return (
    <div className="card">
      <Link to={imageRoute}>
        <img src={home.url} alt="home" />
      </Link>
      <div className="caption">
        <div className="bidDetails">
          Current Bid:{' '}
          <span className="bid">${numberWithCommas(home.bid)}</span>
          <div className="cardIcons">
            <img src={bathroom} alt="bathroom icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
