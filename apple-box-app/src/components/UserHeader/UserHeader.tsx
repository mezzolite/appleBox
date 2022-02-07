import React from 'react';
import { UsersSelectors } from '../../store/users';
import { useAppSelector } from '../../store/hooks';
import './style.scss';

export default function UserHeader() {
  const user = useAppSelector(UsersSelectors.getCurrentItem);

  return (
    <div className="UserHeaderContainer">
      {user && user.username && <h4> {user.username} </h4>}
      {user && user.zipcode && <p> {user.zipcode} </p>}
    </div>
  );
}
