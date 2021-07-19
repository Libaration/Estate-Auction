import React from 'react';

export default function Home(props) {
  const { home } = props;
  return (
    <div className="homeCard">
      <img src={home.url} alt="home" />
      <br />
      <div className="imgCaption">
        Address: {home.address}
        <br />
        List Price: {home.price}
        <br />
        Bathrooms: {home.bathrooms}
      </div>
    </div>
  );
}
