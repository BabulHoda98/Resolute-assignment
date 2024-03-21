import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('babulhoda98@gmail.com');
  const [password, setPassword] = useState('Admin@123');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate
    onLogin();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
