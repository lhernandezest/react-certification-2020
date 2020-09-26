import React, { useContext } from 'react';
import styled from 'styled-components';
import './TopMenu.sass';

import DarKModeContext from '../../../state/DarkModeContext';
import LeftMenuToggle from './LeftMenuToggle/LeftMenuToggle.component';
import Search from './Search/Search.component';
import DarkModeToggle from './DarkModeToggle/DarkModeToggle.component';
import Profile from './Profile/Profile.component';

const TopMenu = () => {
  const { state, dispatch } = useContext(DarKModeContext);
  const Container = styled.header`
    background: ${state.darkMode ? '#556cd6' : '#1C5476'};
  `;

  const Space = styled.div`
    width: auto;
    flex-grow: 2;
  `;

  const handleDarkModeToggle = () =>
    dispatch({
      type: 'TOGGLE_DARK_MODE',
    });

  return (
    <Container className="TopMenu">
      <div className="TopMenu-root">
        <LeftMenuToggle />
        <Search />
        <Space />
        <DarkModeToggle darkMode={state.darkMode} handleToggle={handleDarkModeToggle} />
        <Profile />
      </div>
    </Container>
  );
};

export default TopMenu;
