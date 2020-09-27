import React, { useState } from 'react';
import TopMenu from './TopMenu/TopMenu.component';
import LeftMenu from './LeftMenu/LeftMenu.component';

const MenusComponent = () => {
  const [shouldShouldLeftMenu, showLeftMenu] = useState(false);

  const toggleLeftMenu = () => {
    showLeftMenu(!shouldShouldLeftMenu);
  };

  const handleLeftMenuClose = () => {
    showLeftMenu(false);
  };

  return (
    <div>
      <TopMenu toggleLeftMenu={toggleLeftMenu} />
      <LeftMenu show={shouldShouldLeftMenu} handleClose={handleLeftMenuClose} />
    </div>
  );
};

export default MenusComponent;
