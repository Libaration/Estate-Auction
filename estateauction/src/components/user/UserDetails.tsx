import React, { ReactElement } from 'react';
import moment from 'moment';
interface UserDetailsProps {
  user: {
    username: string;
    created_at: string;
    id: number;
    url: string;
    bids?: [];
  };
}

interface Bid {
  amount: number;
  id: number;
  created_at: string;
}

const renderBids = (bids: []) => {
  return bids.map((bid: Bid) => {
    return (
      <li key={bid.id}>
        ${bid.amount} on {moment(bid.created_at).format('MM/DD/YYYY')}
      </li>
    );
  });
};

export default function UserDetails(props: UserDetailsProps): ReactElement {
  const { user }: UserDetailsProps = props;
  console.log(props);
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
      Recent Bids: ({user.bids ? user.bids.length : '0'}) <br />
      {user.bids ? (
        <ul className="userBidList">
          <ul>{renderBids(user.bids)}</ul>
        </ul>
      ) : (
        '...No recent bids'
      )}
    </div>
  );
}
