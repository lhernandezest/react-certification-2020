import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { colors } from '../../../../utils/constants';

import { useAuth } from '../../../../providers/Auth';

import ProfileMenuItem from './ProfileMenuItem.component';

const Container = styled.ul`
  background: ${colors.BG_SITE};
  color: ${colors.FONT_SITE};
  box-shadow: 2px 0px 10px 0px ${colors.SHADOW_PROFILE_MENU};
`;

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

  const getOptions = () => {
    if (authenticated) {
      return <ProfileMenuItem text="Logout" handleClick={deAuthenticate} />;
    }

    return <ProfileMenuItem text="Login" handleClick={authenticate} />;
  };

  return <Container className="TopMenuProfile-menu">{getOptions()}</Container>;
};

export default ProfileMenu;
