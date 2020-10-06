import React, { useContext, useCallback } from 'react';

import { storageKeys } from '../../utils/constants';
import { storage } from '../../utils/storage';
import mockUsers from '../../testUtils/mockData/users';

const AuthContext = React.createContext(null);

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

function AuthProvider({ children }) {
  const login = useCallback((request) => {
    const user = mockUsers.find((mockUser) => mockUser.username === request.username);

    if (!user) {
      return {
        success: false,
        errors: {
          username: 'User not found',
        },
      };
    }

    if (user.password !== request.password) {
      return {
        success: false,
        errors: {
          password: 'Incorrect password',
        },
      };
    }
    storage.set(storageKeys.AUTHENTICATED, user);
    return {
      success: true,
    };
  }, []);

  const logout = useCallback(() => {
    storage.set(storageKeys.AUTHENTICATED, null);
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth };
export default AuthProvider;
