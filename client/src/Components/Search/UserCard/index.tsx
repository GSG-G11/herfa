import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card, Image, Rate, Typography,
} from 'antd';
import { useTranslation } from 'react-i18next';
import './style.css';
import { UserData } from '../../../utils';

function UserCard({ user }: { user: UserData }) {
  const { Title } = Typography;

  const {
    first_name: firstName,
    last_name: lastName,
    phone,
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
            src={image || '/images/profile.svg'}
          />
        </div>
        <div className="search-user-card-body">
          <div className="search-user-card-info">
            <div className="div-80-2 search-user-name">
              <h2><Link to={`/user/${user.id}`}>{`${firstName} ${lastName}`}</Link></h2>
              <Rate allowHalf defaultValue={avgRating} disabled className="rate" />
            </div>
            <div className="div-80-2 search-user-card-contact">
              <p>{t(location?.city)}</p>
              <p>{phone}</p>
            </div>
            <Title level={5}>{t('servicesOffer')}</Title>
            <p>{t(mainServices.name)}</p>
            <p className="search-user-card-services" />
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default UserCard;
