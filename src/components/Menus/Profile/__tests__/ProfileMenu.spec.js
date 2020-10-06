import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { storageKeys } from '../../../../utils/constants';
import { storage } from '../../../../utils/storage';

import AuthProvider from '../../../../providers/Auth';
import DarKModeContext from '../../../../state/DarkModeContext';
import ProfileMenu from '../ProfileMenu.component';

import { darkModeContext, lightModeContext } from '../../../../testUtils/mocks';

function renderProfileMenu(props, context) {
  render(
    <BrowserRouter>
      <AuthProvider>
        <DarKModeContext.Provider value={context}>
          <ProfileMenu {...props} />
        </DarKModeContext.Provider>
      </AuthProvider>
    </BrowserRouter>
  );
}

describe('ProfileMenu', () => {
  const user = {
    id: 2,
    name: 'Luis Ayala',
    username: 'luis',
    password: 'ayala',
    avatarUrl: 'https://ui-avatars.com/api/?name=Luis+Ayala',
  };

  const props = {
    handleSelection: jest.fn(),
  };

  describe('authenticated menu', () => {
    beforeAll(() => {
      storage.set(storageKeys.AUTHENTICATED, JSON.stringify(user));
    });

    afterAll(() => {
      storage.set(storageKeys.AUTHENTICATED, null);
    });

    it('should display in dark mode', () => {
      renderProfileMenu(props, darkModeContext);

      const logoutItem = screen.getByTestId('menu-item');
      expect(screen.getByTestId('menu-container')).toHaveClass('darkMode');
      expect(logoutItem).toHaveTextContent('Logout');

      fireEvent.click(logoutItem);
      expect(storage.get(storageKeys.AUTHENTICATED)).toBeNull();
    });

    it('should display in light mode', () => {
      renderProfileMenu(props, lightModeContext);

      expect(screen.getByTestId('menu-container')).not.toHaveClass('darkMode');
    });
  });

  describe('unauthenticated menu', () => {
    it('should display in dark mode', () => {
      renderProfileMenu(props, darkModeContext);

      expect(screen.getByTestId('menu-container')).toHaveClass('darkMode');
      expect(screen.getByTestId('menu-item')).toHaveTextContent('Login');
    });

    it('should display in light mode', () => {
      renderProfileMenu(props, lightModeContext);

      expect(screen.getByTestId('menu-container')).not.toHaveClass('darkMode');
    });
  });
});
