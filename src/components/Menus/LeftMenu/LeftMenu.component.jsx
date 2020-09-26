import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './LeftMenu.sass';
import { colors } from '../../../utils/constants';

import { useAuth } from '../../../providers/Auth';

const Container = styled.div`
  background: ${colors.BG_SITE};
  color: ${colors.FONT_SITE};
`;

const LeftMenu = (props) => {
  const { authenticated } = useAuth();

  return (
    <Container className={`LeftMenu ${props.show ? 'active' : ''}`}>
      <Link to="/">Home</Link>
      {authenticated && <Link to="/Favorites">Favorites</Link>}
    </Container>
  );
};

export default LeftMenu;
