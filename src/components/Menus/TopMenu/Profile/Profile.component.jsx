import React, { useState } from 'react';

import wizeLogo from '../../../../assets/wizeline-squarelogo.png';
import avatarIcon from '../../../../assets/avatar-icon.png';
import './Profile.sass';
import ProfileMenu from './ProfileMenu.component';
import { useAuth } from '../../../../providers/Auth';

const Profile = () => {
  const { authenticated } = useAuth();
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
        src={authenticated ? wizeLogo : avatarIcon}
        alt="Profile Menu"
        aria-hidden="true"
      />
      {shouldShowMenu && <ProfileMenu handleSelection={handleMenuSelection} />}
    </div>
  );
};

export default Profile;
