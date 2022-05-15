import React from 'react';
import { PersonalForm, ServicesForm } from '../Components';

function SignUp() {
  return (
    <div className="container">
      <PersonalForm />
      <ServicesForm />
    </div>
  );
}

export default SignUp;
