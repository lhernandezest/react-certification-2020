import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../../../providers/Auth';
import DarKModeContext from '../../../../state/DarkModeContext';

import ProfileMenuItem from './ProfileMenuItem.component';
import LoginComponent from './Login.component';

const ProfileMenu = (props) => {
  const history = useHistory();
  const { authUser, login, logout } = useAuth();
  const { state } = useContext(DarKModeContext);
  const [shouldShowLoginForm, showLoginForm] = useState(false);

  const deAuthenticate = (event) => {
    event.preventDefault();
    logout();
    history.push('/');
    props.handleSelection();
  };

  const authenticate = (request) => {
    return login(request);
  };

  const handleLoginClick = () => {
    showLoginForm(true);
  };

  const handleCloseLoginForm = () => {
    props.handleSelection();
  };

  const getOptions = () => {
    if (authUser) {
      return (
        <ul className={`TopMenuProfile-menu ${state.darkMode && 'darkMode'}`}>
          <ProfileMenuItem text="Logout" handleClick={deAuthenticate} />
        </ul>
      );
    }

    return (
      <>
        <ul className="TopMenuProfile-menu">
          <ProfileMenuItem text="Login" handleClick={handleLoginClick} />
        </ul>
        <LoginComponent
          handleLogin={authenticate}
          show={shouldShowLoginForm}
          handleClose={handleCloseLoginForm}
        />
      </>
    );
  };

  return getOptions();
};

export default ProfileMenu;
