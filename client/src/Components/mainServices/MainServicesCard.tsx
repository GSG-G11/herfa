import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import './style.css';

interface serviceProps {
  service: string,
  id: number,
}

function MainServicesCard({ service, id }: serviceProps) {
  return (
    <Link to="/search" state={{ serviceSearch: id }}>
      <Card.Grid className="main-services-card">
        <img src={`/images/${id}.png`} alt="main service we provide" className="main-services-crd-image" />
        <p className="main-services-crd-text">{service}</p>
      </Card.Grid>
    </Link>
  );
}

export default MainServicesCard;
