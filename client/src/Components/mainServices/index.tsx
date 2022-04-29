import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import './style.css';
import { Card } from 'antd';
import MainServicesCard from './MainServicesCard';
import { serviceObject } from '../../utils';
import { ServiceLocation } from '../../Context/ServiceLocationContext';

function MainServices() {
  const { t } = useTranslation();
  const data = useContext(ServiceLocation);
  return (
    <>
      <h2 className="headline-text">{t('home-main-services')}</h2>
      <Card className="main-services-card-container">
        {data.services.map(
          (item :serviceObject) => (
            <MainServicesCard key={item.name} service={item.name} id={item.id} />),
        )}
      </Card>
    </>
  );
}

export default MainServices;
