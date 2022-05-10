import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image, Rate } from 'antd';
import { useTranslation } from 'react-i18next';
import './style.css';
import { UserData } from '../../utils';

function UserCard({ user }: { user: UserData }) {
  const {
    first_name: firstName,
    last_name: lastName,
    email,
    phone,
    whatsapp,
    description,
    image,
    avgRating,
    main_service: mainServices,
    location,
  } = user;
  const { t } = useTranslation();
  return (
    <Card bordered={false}>
      <div className="search-user-card">
        <div className="search-user-card-image">
          <Image
            width={170}
            height={180}
            src={image}
          />
        </div>
        <div className="search-user-card-body">
          <div className="search-user-card-info">
            <div className="div-80-2 search-user-name">
              <h2><Link to={`/user/${user.id}`}>{`${firstName} ${lastName}`}</Link></h2>
              <Rate allowHalf defaultValue={avgRating} disabled className="rate" />
            </div>
            <p>{location?.city}</p>
            <div className="div-80-2 search-user-card-contact">
              <p>{email}</p>
              <p>{phone}</p>
            </div>
            {t('servicesOffer')}
            <div className="div-80-2 search-user-card-contact">
              <p>{mainServices.name}</p>
            </div>
            <p className="search-user-card-services" />
            <p>{description}</p>
            <p>{whatsapp}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default UserCard;
