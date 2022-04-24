import React from 'react';
import { useTranslation } from 'react-i18next';
import './mainServices.css';
import MainServicesCard from './MainServicesCard';

function MainServices() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('home-main-services')}</h1>
      <MainServicesCard />
    </div>
  );
}

export default MainServices;
