import React from 'react';
import './DarkModeToggle.sass';

const DarkModeToggleComponent = (props) => {
  return (
    <div className="DarkModeToggle">
      <label
        htmlFor="DarkModeToggle-input"
        className="DarkModeToggle-switch"
        aria-hidden="true"
      >
        <input
          data-testid="toggle"
          id="DarkModeToggle-input"
          className={`DarkModeToggle-input ${props.darkMode && 'checked'}`}
          type="checkbox"
          onChange={props.handleToggle}
        />
        <span className="DarkModeToggle-slider" />
      </label>
      <span>Dark mode</span>
    </div>
  );
};

export default DarkModeToggleComponent;
