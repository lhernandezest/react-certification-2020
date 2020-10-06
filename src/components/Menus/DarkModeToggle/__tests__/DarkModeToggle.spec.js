import React from 'react';
import { render, screen } from '@testing-library/react';

import DarkModeToggleComponent from '../DarkModeToggle.component';

function renderDarkModeToggle(props) {
  return render(<DarkModeToggleComponent {...props} />);
}

describe('DarkModeToggle', () => {
  const state = {
    darkMode: false,
    handleToggle: jest.fn(() => true),
  };

  it('checkbox is not checked for light mode', () => {
    renderDarkModeToggle(state);

    const toggle = screen.getByTestId('toggle');
    expect(toggle).not.toHaveClass('checked');
  });

  it('checkbox is checked for dark mode', () => {
    state.darkMode = true;
    renderDarkModeToggle(state);

    const toggle = screen.getByTestId('toggle');
    expect(toggle).toHaveClass('checked');
  });
});
