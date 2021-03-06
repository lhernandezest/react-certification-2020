import React from 'react';
import { Link } from 'react-router-dom';

const LeftMenuItem = (props) => {
  return (
    <Link className="LeftMenu-item" to={props.url} onClick={props.handleClick}>
      {props.text}
    </Link>
  );
};

export default LeftMenuItem;
