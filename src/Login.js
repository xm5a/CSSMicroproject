import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [user, setUser] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) onLogin(user);
  };

  return (
    <div style={{ padding: '100px', textAlign: 'center' }}>
      <h1>Hotel ERP Login</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Enter Username" 
          onChange={(e) => setUser(e.target.value)} 
          style={{ padding: '10px', width: '250px' }}
        />
        <br /><br />
        <button type="submit" style={{ padding: '10px 20px' }}>Login</button>
      </form>
    </div>
  );
};

export default Login;