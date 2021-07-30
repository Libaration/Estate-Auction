import React, { ReactElement } from 'react';
import moment from 'moment';
import { User, Bid } from '../../../actions/UserActionTypes';

interface Props {
  user: User;
}

const renderBids = (bids: Bid[]) => {
  const bidsList: JSX.Element[] = bids.reverse().map((bid) => {
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

export default function UserDetails(props: Props): ReactElement {
  const { user }: Props = props;
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
