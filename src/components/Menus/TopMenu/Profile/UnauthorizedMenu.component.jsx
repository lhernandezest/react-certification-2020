import React, { useState } from 'react';
import ProfileMenuItem from './ProfileMenuItem.component';
import LoginComponent from './Login.component';
import { useAuth } from '../../../../providers/Auth';

const UnauthorizedMenu = (props) => {
  const { login } = useAuth();
  const [shouldShowLoginForm, showLoginForm] = useState(false);

  const authenticate = (request) => {
    return login(request);
  };

  const handleLoginClick = () => {
    showLoginForm(true);
  };

  const handleCloseLoginForm = () => {
    props.handleSelection();
  };

  return (
    <>
      <props.ulWrapper className="TopMenuProfile-menu">
        <ProfileMenuItem text="Login" handleClick={handleLoginClick} />
      </props.ulWrapper>
      <LoginComponent
        handleLogin={authenticate}
        show={shouldShowLoginForm}
        handleClose={handleCloseLoginForm}
        onHide={() => {}}
      />
    </>
  );
};

export default UnauthorizedMenu;
