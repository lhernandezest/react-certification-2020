import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';

function Private({ children, ...rest }) {
  const { authUser } = useAuth();

  return <Route {...rest} render={() => (authUser ? children : <Redirect to="/" />)} />;
}

export default Private;
