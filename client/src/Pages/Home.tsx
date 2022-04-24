import React from 'react';
import { useTranslation } from 'react-i18next';
import MainServices from '../Components';

function Home() {
  return (
    <div>
      {useTranslation().t('home-greeting')}
      <MainServices />
    </div>
  );
}

export default Home;
