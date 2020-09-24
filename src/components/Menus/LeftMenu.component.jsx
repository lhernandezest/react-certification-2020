import React from 'react';
import { Link } from 'react-router-dom';
import './LeftMenu.sass';

import { useAuth } from '../../providers/Auth';

const LeftMenu = () => {
  const { authenticated } = useAuth();

  return (
    <nav>
      <Link to="/">Home</Link>
      {authenticated && <Link to="/Favorites">Favorites</Link>}
    </nav>
  );
};

export default LeftMenu;
