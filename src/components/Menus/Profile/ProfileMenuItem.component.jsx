import React from 'react';

const ProfileMenuItem = (props) => {
  return (
    <li
      data-testid="menu-item"
      className="TopMenuProfile-menu-item"
      onClick={props.handleClick}
      aria-hidden="true"
    >
      {props.text}
    </li>
  );
};

export default ProfileMenuItem;
