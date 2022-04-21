import React from 'react';
import { useTranslation } from 'react-i18next';

function SignUp() {
  return (
    <div className="container">
      {useTranslation().t('signUp-greeting')}
    </div>
  );
}

export default SignUp;
