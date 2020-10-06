import React from 'react';
import './LeftMenuToggle.sass';

const LeftMenuToggle = (props) => {
  return (
    <div
      className="TopMenu-LeftMenuToggle"
      onClick={props.handleToggle}
      aria-hidden="true"
    >
      <div />
      <div />
      <div />
    </div>
  );
};

export default LeftMenuToggle;
