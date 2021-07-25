import React, { ReactElement } from 'react';
import moment from 'moment';
interface UserDetailsProps {
  user: {
    username: string;
    created_at: string;
    id: number;
    url: string;
  };
}

export default function UserDetails(props: UserDetailsProps): ReactElement {
  const { user }: UserDetailsProps = props;
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
    </div>
  );
}
