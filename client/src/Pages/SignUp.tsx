import React from 'react';
import { useTranslation } from 'react-i18next';

import PersonalForm from '../Components/PersonalInformaion';

function SignUp() {
  const { t } = useTranslation();
  return (
    <div className="container">
      <h1>{t('crate-account')}</h1>
      <PersonalForm />
    </div>
  );
}

export default SignUp;
