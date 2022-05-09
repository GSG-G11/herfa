import React from 'react';
import { useTranslation } from 'react-i18next';
import { LogInPage } from '../Components';

function LogIn() {
  return (
    <div className="container">
      {useTranslation().t('logIn-greeting')}
      <LogInPage />
    </div>
  );
}

export default LogIn;
