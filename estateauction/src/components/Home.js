import React from 'react';

export default function Home(props) {
  const { home } = props;
  return <div className="homeCard">{home.address}</div>;
}
