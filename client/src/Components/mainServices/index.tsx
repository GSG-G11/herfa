import React from 'react';
import { useTranslation } from 'react-i18next';
import './style.css';
import { Card } from 'antd';
import MainServicesCard from './MainServicesCard';

interface mainServicesProps {
  mainServices: {
        name:string,
    }[]
}

function MainServices({ mainServices }: mainServicesProps) {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t('home-main-services')}</h1>
      <Card className="main-services-card-container">
        {mainServices.map(
          (item, index) => <MainServicesCard key={item.name} service={item.name} imgLink={index} />,
        )}
      </Card>
    </>
  );
}

export default MainServices;
