import React from 'react';
import { useTranslation } from 'react-i18next';

import PersonalForm from '../Components/PersonalInformaion';

function SignUp() {
  return (
    <div className="container">
      {useTranslation().t('crate-account')}
      <PersonalForm />
    </div>
  );
}

export default SignUp;
