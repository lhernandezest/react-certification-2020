import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { getAuthUser } from '../../utils/fns';

function Private({ children, ...rest }) {
  return (
    <Route {...rest} render={() => (getAuthUser() ? children : <Redirect to="/" />)} />
  );
}

export default Private;
