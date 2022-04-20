import React from 'react';
import { useTranslation } from 'react-i18next';

function LogIn() {
  return (
    <div className="container">
      {useTranslation().t('logIn-greeting')}
    </div>
  );
}

export default LogIn;
