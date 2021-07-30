import React from 'react';
import building from '../../../icons/building.png';
import Clouds from '../.././common/Clouds';

export const index = () => {
  return (
    <div>
      HOMEHOMEHOMEs
      <Clouds />
      <img className="landingBuilding" src={building} alt="building" />
    </div>
  );
};
