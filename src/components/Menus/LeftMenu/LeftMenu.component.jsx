import React, { useContext } from 'react';
import styled from 'styled-components';
import './LeftMenu.sass';

import DarKModeContext from '../../../state/DarkModeContext';
import { useAuth } from '../../../providers/Auth';
import LeftMenuItem from './LeftMenuItem.component';

const Background = styled.div`
  background: rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const LeftMenu = (props) => {
  const { state } = useContext(DarKModeContext);
  const { authUser } = useAuth();

  return (
    <>
      {props.show && <Background onClick={props.handleClose} />}
      <div className={`LeftMenu ${props.show && 'active'} ${state.darkMode && 'darkMode'}`}>
        <LeftMenuItem url="/" text="Home" handleClick={props.handleClose} />
        {authUser && (
          <LeftMenuItem
            url="/Favorites"
            text="Favorites"
            handleClick={props.handleClose}
          />
        )}
      </div>
    </>
  );
};

export default LeftMenu;
