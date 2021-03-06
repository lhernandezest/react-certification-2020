import React, { useContext } from 'react';
import styled from 'styled-components';
import './TopMenu.sass';

import DarKModeContext from '../../../state/DarkModeContext';
import LeftMenuToggle from '../LeftMenuToggle/LeftMenuToggle.component';
import Search from '../Search/Search.component';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle.component';
import Profile from '../Profile/Profile.component';

const Space = styled.div`
  width: auto;
  flex-grow: 2;
`;

const TopMenu = (props) => {
  const { state, dispatch } = useContext(DarKModeContext);

  const handleDarkModeToggle = () =>
    dispatch({
      type: 'TOGGLE_DARK_MODE',
    });

  return (
    <div className={`TopMenu ${state.darkMode && 'darkMode'}`}>
      <div className="TopMenu-root">
        <LeftMenuToggle handleToggle={props.toggleLeftMenu} />
        <Search />
        <Space />
        <DarkModeToggle darkMode={state.darkMode} handleToggle={handleDarkModeToggle} />
        <Profile />
      </div>
    </div>
  );
};

export default TopMenu;
