import React, { useState, useEffect, useContext, useCallback } from 'react';

import { storageKeys } from '../../utils/constants';
import { storage } from '../../utils/storage';
import mockUsers from '../../utils/mockData/users';

const AuthContext = React.createContext(null);

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const lastAuthState = storage.get(storageKeys.AUTHENTICATED);
    const isAuthenticated = Boolean(lastAuthState);

    // setAuthenticated(isAuthenticated);
    setAuthenticated(isAuthenticated);
  }, []);

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

    setAuthenticated(true);
    storage.set(storageKeys.AUTHENTICATED, true);
    return {
      success: true,
    };
  }, []);

  const logout = useCallback(() => {
    setAuthenticated(false);
    storage.set(storageKeys.AUTHENTICATED, false);
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, authenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth };
export default AuthProvider;
