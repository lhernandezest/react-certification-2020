import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../Login.component';

function renderLoginForm(props) {
  render(<Login {...props} />);
}

describe('Login Form', () => {
  const props = {
    handleLogin: jest.fn(() => ({ success: true })),
    handleClose: jest.fn(),
    show: true,
  };

  describe('authenticated menu', () => {
    it('should close when cancel is clicked', () => {
      renderLoginForm(props);

      const closeBtn = screen.getByTestId('close-btn');
      fireEvent.click(closeBtn);
      expect(props.handleClose).toBeCalled();
    });

    it('should try to login with state data', () => {
      renderLoginForm(props);

      fireEvent.change(screen.getByTestId('username-input'), {
        target: {
          value: 'user',
        },
      });

      fireEvent.change(screen.getByTestId('password-input'), {
        target: {
          value: 'pass',
        },
      });

      const sendBtn = screen.getByTestId('login-form');
      fireEvent.submit(sendBtn);
      expect(props.handleLogin).toBeCalledWith({
        username: 'user',
        password: 'pass',
      });
    });

    it('should display errors when login', () => {
      props.handleLogin = jest.fn(() => ({
        errors: { username: 'username error', password: 'password error' },
      }));
      renderLoginForm(props);

      const sendBtn = screen.getByTestId('login-form');
      fireEvent.submit(sendBtn);
      expect(screen.getByTestId('username-errors')).toHaveTextContent('username error');
      expect(screen.getByTestId('password-errors')).toHaveTextContent('password error');
    });

    it('should try to login when send is clicked', () => {
      renderLoginForm(props);

      const sendBtn = screen.getByTestId('login-form');
      fireEvent.submit(sendBtn);
      expect(props.handleLogin).toBeCalledWith({
        username: '',
        password: '',
      });
    });
  });
});
