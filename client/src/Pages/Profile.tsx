import React from 'react';
import { useTranslation } from 'react-i18next';
import UserInfoCard from '../Components/UserInfoCard';

function Profile() {
  const userInfo = {
    name: 'saleh',
    facebook: 'facebook',
    instagram: 'instagram',
    whatsapp: 'whatsapp',
    rate: 3.5,
    phone: '00972592222222',
    email: 'aaaa@asdas.asdasd',
    services: ['midical', 'engineer', 'midical'],
    description: 'hi, its saleh im saleh and my name is saleh so, yoy can call me saleh in',
    location: 'gaza',
    image: 'url',
  };
  return (
    <div className="container">
      {useTranslation().t('profile-greeting')}
      <UserInfoCard userInfo={userInfo} />
    </div>
  );
}

export default Profile;
