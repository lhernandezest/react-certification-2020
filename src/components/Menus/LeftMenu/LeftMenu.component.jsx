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

const Background = styled.div`
  background: rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const LeftMenu = (props) => {
  const { authenticated } = useAuth();

  return (
    <>
      {props.show && <Background onClick={props.handleClose} />}
      <Container className={`LeftMenu ${props.show ? 'active' : ''}`}>
        <Link to="/">Home</Link>
        {authenticated && <Link to="/Favorites">Favorites</Link>}
      </Container>
    </>
  );
};

export default LeftMenu;
