import React from 'react';
import LoginForm from './LoginForm';
import './style.css';

function LogInPage() {
  return (
    <div className="login-container">
      <div className="img-container">
        <img src="/images/login.jpg" alt="login img" />
      </div>
      <LoginForm />
    </div>
  );
}
export default LogInPage;
