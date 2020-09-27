import React from 'react';
import styled from 'styled-components';
import './LeftMenu.sass';
import { colors } from '../../../utils/constants';

import { useAuth } from '../../../providers/Auth';
import LeftMenuItem from './LeftMenuItem.component';

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
        <LeftMenuItem url="/" text="Home" handleClick={props.handleClose} />
        {authenticated && <LeftMenuItem url="/Favorites" text="Favorites" handleClick={props.handleClose} />}
      </Container>
    </>
  );
};

export default LeftMenu;
