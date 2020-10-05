import React, { useState } from 'react';
import styled from 'styled-components';
import './Profile.sass';

import avatarIcon from '../../../../assets/avatar-icon.png';
import ProfileMenu from './ProfileMenu.component';
import { getAuthUser } from '../../../../utils/fns';

const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #000;
  opacity: 0.1;
`;

const Profile = () => {
  const authUser = getAuthUser();
  const [shouldShowMenu, showMenu] = useState(false);

  const toggleMenu = () => {
    showMenu(!shouldShowMenu);
  };

  const handleMenuSelection = () => {
    showMenu(false);
  };

  return (
    <div className="TopMenuProfile">
      <img
        className="TopMenuProfile-icon"
        onClick={toggleMenu}
        src={getAuthUser() ? authUser.avatarUrl : avatarIcon}
        alt="Profile Menu"
        aria-hidden="true"
      />
      {shouldShowMenu && (
        <div>
          <ProfileMenu handleSelection={handleMenuSelection} />
          <Background onClick={toggleMenu} />
        </div>
      )}
    </div>
  );
};

export default Profile;
