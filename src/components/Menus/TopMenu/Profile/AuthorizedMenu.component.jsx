import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../../../providers/Auth';

import ProfileMenuItem from './ProfileMenuItem.component';

const AuthorizedMenu = (props) => {
  const history = useHistory();
  const { logout } = useAuth();

  const deAuthenticate = (event) => {
    event.preventDefault();
    logout();
    history.push('/');
    props.handleSelection();
  };

  return (
    <props.ulWrapper className="TopMenuProfile-menu">
      <ProfileMenuItem text="Logout" handleClick={deAuthenticate} />
    </props.ulWrapper>
  );
};

export default AuthorizedMenu;
