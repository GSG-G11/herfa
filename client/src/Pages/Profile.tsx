import React from 'react';
import { useTranslation } from 'react-i18next';
import WorkCard from '../Components/WorkCard/WorkCard';
import UserInfoCard from '../Components/UserInfoCard';

const work = {
  title: 'Europe saleh  Street beat',
  content: 'Europe saleh  Street beat Europe saleh  Street beat Europe saleh  Street beat Europe saleh  Street beat ',
  image: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
  userId: 1,
};
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
  const act = {
    edit() {
    },
    setting() {
    },
  };
  const isAuth = {
    isAuth: true,
  };
  return (
    <>
      <UserInfoCard userInfo={userInfo} />
      {useTranslation().t('profile-greeting')}
      <div className="work-card-container">
        <WorkCard work={work} actions={act} isAuth={isAuth} />
        <WorkCard work={work} actions={act} isAuth={isAuth} />
        <WorkCard work={work} actions={act} isAuth={isAuth} />
        <WorkCard work={work} actions={act} isAuth={isAuth} />
        <WorkCard work={work} actions={act} isAuth={isAuth} />
        <WorkCard work={work} actions={act} isAuth={isAuth} />
      </div>
    </>
  );
}

export default Profile;
