import React from 'react';
import { Card } from 'antd';
import './style.css';

interface serviceProps {
  service: string,
  imgLink: number,
}

function MainServicesCard({ service, imgLink }: serviceProps) {
  return (
    <Card.Grid className="main-services-card">
      <img src={`/images/${imgLink}.png`} alt="main service we provide" className="main-services-crd-image" />
      <p className="main-services-crd-text">{service}</p>
    </Card.Grid>
  );
}

export default MainServicesCard;
