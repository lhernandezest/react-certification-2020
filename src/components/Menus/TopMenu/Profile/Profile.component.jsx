import React, { useState } from 'react';

import wizeLogo from '../../../../assets/wizeline-squarelogo.png';
import './Profile.sass';
import ProfileMenu from './ProfileMenu.component';

const Profile = () => {
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
        src={wizeLogo}
        alt="Profile Menu"
        aria-hidden="true"
      />
      {shouldShowMenu && <ProfileMenu handleSelection={handleMenuSelection} />}
    </div>
  );
};

export default Profile;
