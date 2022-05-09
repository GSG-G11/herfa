import React from 'react';
import LoginForm from './LoginFrom';
import './style.css';

function LogInPage() {
  return (
    <div className="login-container">
      <div className="img-container">
        <img src="../../assets/login.png" alt="login img" />
      </div>
      <LoginForm />
    </div>
  );
}
export default LogInPage;
