import React, { useState } from 'react';
import TopMenu from './TopMenu/TopMenu.component';
import LeftMenu from './LeftMenu/LeftMenu.component';

const MenusComponent = () => {
  const [shouldShouldLeftMenu, showLeftMenu] = useState(false);

  const toggleLeftMenu = () => {
    showLeftMenu(!shouldShouldLeftMenu);
    console.log({
      shouldShouldLeftMenu,
      message: "TOGGLE",
    });
  };

  return (
    <div>
      <TopMenu toggleLeftMenu={toggleLeftMenu} />
      <LeftMenu show={shouldShouldLeftMenu} />
    </div>
  );
};

export default MenusComponent;
