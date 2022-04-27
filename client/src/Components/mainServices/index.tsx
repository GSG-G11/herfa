import React from 'react';
import { useTranslation } from 'react-i18next';
import './style.css';
import { Card } from 'antd';
import MainServicesCard from './MainServicesCard';
import { serviceObject } from '../../utils';

interface mainServicesProps {
  mainServices: serviceObject[]
}

function MainServices({ mainServices }: mainServicesProps) {
  const { t } = useTranslation();

  return (
    <>
      <h2 className="headline-text">{t('home-main-services')}</h2>
      <Card className="main-services-card-container">
        {mainServices.map(
          (item :serviceObject) => (
            <MainServicesCard key={item.name} service={item.name} id={item.id} />),
        )}
      </Card>
    </>
  );
}

export default MainServices;
