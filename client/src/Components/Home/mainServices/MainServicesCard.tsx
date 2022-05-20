import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './style.css';
import { serviceProps } from '../../../utils';

function MainServicesCard({ service, id }: serviceProps) {
  const { t } = useTranslation();
  return (
    <Link to="/search" state={{ serviceSearch: id }}>
      <Card.Grid className="main-services-card">
        <img src={`/images/${id}.png`} alt="main service we provide" className="main-services-crd-image" />
        <p className="main-services-crd-text">{t(service)}</p>
      </Card.Grid>
    </Link>
  );
}

export default MainServicesCard;
