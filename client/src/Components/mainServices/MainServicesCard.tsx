/* eslint-disable max-len */
import React from 'react';
import { Card } from 'antd';
import 'antd/dist/antd.css';
import './mainServices.css';

interface serviceProps {
  service: string,
  imgLink: number,
}

function MainServicesCard({ service, imgLink }: serviceProps) {
  return (
    <Card.Grid className="main-services-card">
      <img src={`../../../images/${imgLink + 1}.png`} alt="main service we provide" className="main-services-crd-image" />
      <p className="main-services-crd-text">{service}</p>
    </Card.Grid>
  );
}

export default MainServicesCard;
