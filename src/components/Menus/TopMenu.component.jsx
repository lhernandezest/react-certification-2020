import React from 'react';
import './TopMenu.sass';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../providers/Auth';

const TopMenu = () => {
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

  const getAuthOption = () => {
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

  return (
    <div className="top-menu">
      <div>Open Menu</div>
      <div>Search</div>
      <div>Dark Mode</div>
      <div>Profile {getAuthOption()}</div>
    </div>
  );
};

export default TopMenu;
