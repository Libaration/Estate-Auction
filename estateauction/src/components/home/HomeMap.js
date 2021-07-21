import React from 'react';

export default function HomeMap(props) {
  const API_KEY = process.env.REACT_APP_API_KEY;

  const { home } = props;
  return (
    <div class="embedMap">
      <iframe
        title="map"
        style={{ border: 'none', width: '1266px' }}
        src={`https://www.google.com/maps/embed/v1/search?q=${escape(
          home.address
        )}&key=${API_KEY}`}
      ></iframe>
    </div>
  );
}
