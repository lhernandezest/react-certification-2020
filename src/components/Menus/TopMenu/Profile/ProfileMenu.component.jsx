import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './ProfileMenu.sass';

import { useAuth } from '../../../../providers/Auth';

const ProfileMenu = () => {
  const history = useHistory();
  const { authenticated, logout, login } = useAuth();

  const authenticate = (event) => {
    event.preventDefault();
    login();
  };

  const deAuthenticate = (event) => {
    event.preventDefault();
    logout();
    history.push('/');
  };

  if (authenticated)
    return (
      <Link to="/" onClick={deAuthenticate}>
        logout
      </Link>
    );

  return (
    <Link to="/" onClick={authenticate}>
      login
    </Link>
  );
};

export default ProfileMenu;
