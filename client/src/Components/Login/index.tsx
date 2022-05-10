import React from 'react';
import LoginForm from './LoginFrom';
import './style.css';
import loginImg from '../../assets/login.png';

function LogInPage() {
  return (
    <div className="login-container">
      <div className="img-container">
        <img src={loginImg} alt="login img" />
      </div>
      <LoginForm />
    </div>
  );
}
export default LogInPage;
