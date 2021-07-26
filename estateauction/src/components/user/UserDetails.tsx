import React, { ReactElement } from 'react';
import moment from 'moment';
interface UserDetailsProps {
  user: {
    username: string;
    created_at: string;
    id: number;
    url: string;
    bids?: [] | null;
  };
}

interface Bid {
  amount: number;
  id: number;
  created_at: string;
}

const renderBids = (bids: []) => {
  const bidsList: JSX.Element[] = bids.reverse().map((bid: Bid) => {
    return (
      <li key={bid.id}>
        ${bid.amount} on {moment(bid.created_at).format('MM/DD/YYYY')}
      </li>
    );
  });
  return (
    <ul className="userBidList">
      <ul>{bidsList}</ul>
    </ul>
  );
};

export default function UserDetails(props: UserDetailsProps): ReactElement {
  const { user }: UserDetailsProps = props;
  user.bids = user.bids || [];
  const userHasBids: boolean = !user.bids.length;
  return (
    <div>
      <div className="avatar">
        <img src={user.url} alt="avatar" />
      </div>
      Member Since: {moment(user.created_at).format('MM/DD/YYYY')}
      <br />
      Username: {user.username}
      <br />
      Member ID: {user.id}
      <br />
      Recent Bids: ({userHasBids ? '0' : user.bids.length}) <br />
      {userHasBids ? '....No recent bids' : renderBids(user.bids)}
    </div>
  );
}
