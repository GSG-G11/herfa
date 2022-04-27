import React from 'react';
import { useTranslation } from 'react-i18next';
import './style.css';
import { Card } from 'antd';
import MainServicesCard from './MainServicesCard';

interface mainServicesProps {
  mainServices: {
        name:string,
        id: number,
    }[]
}

function MainServices({ mainServices }: mainServicesProps) {
  const { t } = useTranslation();

  return (
    <>
      <h2 className="headline-text">{t('home-main-services')}</h2>
      <Card className="main-services-card-container">
        {mainServices.map(
          (item) => <MainServicesCard key={item.name} service={item.name} imgLink={item.id} />,
        )}
      </Card>
    </>
  );
}

export default MainServices;
