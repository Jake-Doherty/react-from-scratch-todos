import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { NavLink, Redirect, useParams } from 'react-router-dom';
import { useUser } from '../../context/UserContext.js';
import { authUser } from '../../services/auth.js';
import './Auth.css';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { type } = useParams();
  const { user, setUser } = useUser();

  if (user) {
    return <Redirect to="/todos" />;
  }

  const submitAuth = async () => {
    try {
      const newUser = await authUser(email, password, type);
      setUser(newUser);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div id="login-container">
      <nav id="auth-nav">
        <h1 id="auth-header">Todo Login</h1>
        <div className="panel-tabs">
          <NavLink
            className="is-size-6 has-text-weight-bold"
            to="/auth/sign-in"
            style={(isActive) => ({
              display: !isActive ? '' : 'none',
            })}
          >
            Have an account? Sign In here.
          </NavLink>
          <NavLink
            className="is-size-6 has-text-weight-bold"
            to="/auth/sign-up"
            style={(isActive) => ({
              display: !isActive ? '' : 'none',
            })}
          >
            {`Don't have an account? Sign Up here.`}
          </NavLink>
        </div>
        <div className="auth-form">
          <div className="input-container">
            <label className="label">
              <h4>Email</h4>
              <input
                className="input"
                type="email"
                placeholder="email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div className="input-container">
            <label className="label">
              <h4>Password</h4>
            </label>
            <input
              className="input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="control">
          <Button variant="primary" onClick={submitAuth}>
            Submit
          </Button>
          {/* <button onClick={submitAuth} className="auth-submit">
            Submit
          </button> */}
        </div>
      </nav>
    </div>
  );
}
