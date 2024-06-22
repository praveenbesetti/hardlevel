// LoginPage.js
import React from 'react';
import { useAppContext } from './AppContext';

const LoginPage = () => {
  const { login } = useAppContext();

  const handleLogin = () => {
    // Perform login logic and get user data
    const userData = { username: 'exampleUser' };
    login(userData);
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
