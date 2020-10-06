import React, { useState } from 'react';
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';

const Login = (props) => {
  const [errors, setErrors] = useState({});
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const response = props.handleLogin({
      username,
      password,
    });

    if (response.success) {
      return props.handleClose();
    }
    setErrors(response.errors);
  };

  return (
    <>
      <Modal
        id="loginModal"
        show={props.show}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form data-testid="login-form" id="loginForm" onSubmit={handleSubmit}>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Username
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  data-testid="username-input"
                  type="text"
                  placeholder="Username..."
                  value={username}
                  onChange={handleUsernameChange}
                  isInvalid={!!errors.username}
                  required
                />
                <Form.Control.Feedback data-testid="username-errors" type="invalid">
                  {errors.username}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Password
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  data-testid="password-input"
                  type="password"
                  placeholder="Password..."
                  value={password}
                  onChange={handlePasswordChange}
                  isInvalid={!!errors.password}
                  required
                />
                <Form.Control.Feedback data-testid="password-errors" type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button data-testid="close-btn" variant="secondary" onClick={props.handleClose}>
            Cancel
          </Button>
          <Button data-testid="send-btn" variant="primary" type="submit" form="loginForm">
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Login;
