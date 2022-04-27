import React from 'react';
import { Card, Image, Rate } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';
import './style.css';
import { OneService, UserInfoCardProps } from '../../utils';
import ModalRating from '../ModalRating';

function UserInfoCard({ userInfo }: UserInfoCardProps) {
  const {
    user: {
      first_name: firstName,
      last_name: lastName,
      services,
      image,
      phone,
      email,
      description,
      location,
    },
    totalReviews,
  } = userInfo;

  const { t } = useTranslation();
  return (
    <Card bordered={false}>
      <div className="card">
        <div className="image">
          <Image width={100} src={image} />
        </div>

        <div className="content">
          <div className="name">
            <h2>{firstName}</h2>
            <h2>{lastName}</h2>
            <Rate
              allowHalf
              defaultValue={totalReviews}
              disabled
              className="rate"
            />
          </div>
          <p>{location.city}</p>
          {t('servicesOffer')}
          <p className="services">
            {services
              && services.map((service: OneService) => (
                <span key={service.id} className="service">
                  {service.name}
                </span>
              ))}
          </p>
          <p>{description}</p>
        </div>
        <div className="contact">
          <p>{email}</p>
          <p>{phone}</p>
          <div className="social">
            <a href="https://www.google.fr/">
              {' '}
              <FontAwesomeIcon
                style={{ color: '#AA38A5' }}
                icon={faInstagram}
                size="2x"
              />
            </a>
            <a href="https://www.google.ps/">
              {' '}
              <FontAwesomeIcon
                style={{ color: '#009FD9' }}
                icon={faFacebook}
                size="2x"
              />
            </a>
          </div>

          <div className="footer">
            <span>
              <FontAwesomeIcon
                icon={faWhatsapp}
                size="2x"
                style={{ color: '#56A309' }}
              />
              {' '}
              {t('contactMe')}
            </span>
            <ModalRating />
          </div>
        </div>
      </div>
    </Card>
  );
}

export default UserInfoCard;
