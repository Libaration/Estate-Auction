import React from 'react';
import { sortHomesBy } from '../../../helpers/helpers';
import { Home } from '../../../actions/HomeActionTypes';

interface Props {
  sortedBy: string;
  sortHomes: (sortType: string) => void;
  homes: Home[];
}
const index = (props: Props) => {
  const areHomesPopulated: boolean = !!props.homes;
  const renderHomes = () => {
    const { homes } = props;
    let homesList = sortHomesBy('recentlyCreated', homes);
    return homesList.map((home) => {
      return (
        <div className="homeCards" key={home.id}>
          {/* <Home
            home={home}
            key={home.id}
            viewOptions={{ willShowBids: true, willShowCountdown: true }}
          /> */}
          {home.address}
        </div>
      );
    });
  };
  return <div>{areHomesPopulated ? renderHomes() : ''}</div>;
};

export default index;
