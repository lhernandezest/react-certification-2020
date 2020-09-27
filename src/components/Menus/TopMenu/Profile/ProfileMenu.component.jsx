import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../../utils/constants';

import { useAuth } from '../../../../providers/Auth';

import UnauthorizedMenu from './UnauthorizedMenu.component';
import AuthorizedMenu from './AuthorizedMenu.component';

const ulWrapper = styled.ul`
  background: ${colors.BG_SITE};
  color: ${colors.FONT_SITE};
  box-shadow: 2px 0px 10px 0px ${colors.SHADOW_PROFILE_MENU};
`;

const ProfileMenu = (props) => {
  const { authUser } = useAuth();

  const getOptions = () => {
    if (authUser) {
      return (
        <AuthorizedMenu ulWrapper={ulWrapper} handleSelection={props.handleSelection} />
      );
    }

    return (
      <UnauthorizedMenu ulWrapper={ulWrapper} handleSelection={props.handleSelection} />
    );
  };

  return getOptions();
};

export default ProfileMenu;
