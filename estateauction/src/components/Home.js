import React from 'react';

export default function Home(props) {
  const { home } = props;
  return (
    <div className="homeCard">
      <img src={home.url} alt="home" />
      <div className="caption">
        <b>Address:</b> {home.address}
        <br />
        <b>List Price:</b> {home.price}
        <br />
        <b>Bathrooms:</b> {home.bathrooms}
        <br />
        <b>Bedrooms:</b> {home.bedrooms}
      </div>
    </div>
  );
}
