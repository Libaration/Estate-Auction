import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import Countdown from 'react-countdown';

interface Props {
  home: {
    url: string;
    bid: number;
    endDate: string;
  };
}

export default function HomeCountdown({ home }: Props): ReactElement {
  return (
    <div className="timeRemaining">
      Time Remaining:{' '}
      <div className="countdown">
        <Countdown date={home.endDate} />
      </div>
    </div>
  );
}
