import React from 'react';
import './DarkModeToggle.sass';

const DarkModeToggleComponent = (props) => {
  return (
    <div className="DarkModeToggle">
      <label
        htmlFor="DarkModeToggle-input"
        className="DarkModeToggle-switch"
        onClick={props.handleToggle}
        aria-hidden="true"
      >
        <input
          id="DarkModeToggle-input"
          className={`DarkModeToggle-input ${props.darkMode ? 'checked' : ''}`}
          type="checkbox"
        />
        <span className="DarkModeToggle-slider" />
      </label>
      <span>Dark mode</span>
    </div>
  );
};

export default DarkModeToggleComponent;
