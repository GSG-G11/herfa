import React from 'react';
import { useTranslation } from 'react-i18next';
import UserInfoCard from '../components/profile/UserInfoCard';

function Profile() {
  return (
    <div className="container">
      {useTranslation().t('profile-greeting')}
      <UserInfoCard />
    </div>
  );
}

export default Profile;
