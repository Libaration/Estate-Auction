import React from 'react';
import building from '../icons/building.png';
import Clouds from './common/Clouds';

export default function Landing() {
  return (
    <div>
      HOMEHOMEHOMEs
      <Clouds />
      <img class="landingBuilding" src={building} alt="building" />
    </div>
  );
}
