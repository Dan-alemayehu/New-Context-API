// UserInfo.js
import React, { useContext } from 'react';
import { AppContext } from './AppContext';

const UserInfo = () => {
  const { user } = useContext(AppContext);

  return (
    <div>
      <h2>User Info</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
};

export default UserInfo;
