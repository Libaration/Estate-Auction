import React from 'react';
import bathroom from '../../icons/bathroom.png';
import bedroom from '../../icons/bedroom.png';
import zone from '../../icons/zone.png';
import numberWithCommas from '../../helpers/numbersHelper';
export default function HomeDetails(props) {
  const { home } = props;
  return (
    <>
      <div className="homeDetails">
        <div className="detailsIcons">
          <img src={bathroom} alt="bathroom icon" />
          <span>{home.bathrooms} Bathroom/s</span>

          <img src={bedroom} alt="bedroom icon" />
          <span>{home.bedrooms} Bedroom/s</span>

          <img src={zone} alt="zone icon" />
          <span>Zoning: {home.zoning}</span>
        </div>
        <div className="detailsText">
          <span>{home.details}</span>
          <p></p>
          <div className="detailsMoreText">
            <b>Occupancy:</b> Property is Vacant.
            <br />
            <b>Year Built:</b> 1910 <br />
            <b>Lot Size:</b> 14X77
            <br /> <b>Real Estate Taxes (2020-2021):</b> $354.00
            <br /> Title: Sold free and clear of all liens. Subject to annual
            ground rent of $78.00
            <br />
            <b>Inspection Time:</b> Call Office for Details.
            <br />
            <b>Deposit:</b> The initial deposit amount is listed above. All
            deposits must be cash or certified funds.
            <br />
            <b>Auction ID:</b> A-000001616
          </div>
        </div>
      </div>{' '}
      <div className="bid">
        <b>Current Bid: ${numberWithCommas(home.bid)}</b>
      </div>
      <b>Address:</b> {home.address}
      <div className="homeShowPicture">
        <img src={`${home.url}`} alt="home" />
      </div>
    </>
  );
}
