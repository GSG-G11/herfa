import React from 'react';
import {
  Card, Image, Rate,
} from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import { useTranslation } from 'react-i18next';
import image1 from '../../assets/profileImg.png';
import './style.css';

interface UserInfoCardProps {
  userInfo: {
    name: string;
    facebook: string;
    instagram: string;
    whatsapp: string;
    rate: number;
    phone: string;
    email: string;
    services: string[];
    description: string;
    location: string;
    image: string;

  };
}
function UserInfoCard({ userInfo }:UserInfoCardProps) {
  const {
    name, rate, phone, email, services, description, location,
  } = userInfo;
  const { t } = useTranslation();
  return (
    <Card bordered={false}>
      <div className="card">
        <div className="image">
          <Image width={100} src={image1} />
        </div>

        <div className="content">
          <div className="name">
            <h2>{name}</h2>
            <Rate allowHalf defaultValue={rate} disabled className="rate" />
          </div>
          <p>{location}</p>
          {t('servicesOffer')}
          <p className="services">
            {services.map((service) => (
              <span key={service} className="service">
                {service}
              </span>
            ))}
          </p>
          <p>
            {description}
          </p>
        </div>
        <div className="contact">
          <p>{email}</p>
          <p>{phone}</p>
          <div className="social">
            <a href="https://www.google.fr/">
              {' '}
              <FontAwesomeIcon style={{ color: '#AA38A5' }} icon={faInstagram} size="2x" />
            </a>
            <a href="https://www.google.ps/">
              {' '}
              <FontAwesomeIcon style={{ color: '#009FD9' }} icon={faFacebook} size="2x" />
            </a>
          </div>

          <div className="footer">
            <span>
              <FontAwesomeIcon icon={faWhatsapp} size="2x" style={{ color: '#56A309' }} />
              {' '}
              {t('contactMe')}
            </span>
            <br />
            <span>
              <FontAwesomeIcon icon={faStar} size="lg" style={{ color: '#FADB14' }} />
              {' '}
              {t('review')}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default UserInfoCard;
