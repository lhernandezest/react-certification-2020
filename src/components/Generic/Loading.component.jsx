import React from 'react';
import './Loading.sass';
import { Spinner } from 'react-bootstrap';

const LoadingComponent = () => {
  return (
    <div className="Loading">
      <Spinner className="Loading-spinner" animation="grow" />
    </div>
  );
};

export default LoadingComponent;
