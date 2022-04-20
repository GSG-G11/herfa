import React from 'react';
import { useTranslation } from 'react-i18next';

function Profile() {
  return (
    <div className="container">
      {useTranslation().t('profile-greeting')}
    </div>
  );
}

export default Profile;
