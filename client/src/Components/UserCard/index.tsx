import React from 'react';
import { Card, Image, Rate } from 'antd';
import { useTranslation } from 'react-i18next';
import './style.css';
import { OneUserType } from '../../utils';

function UserCard({ user }: { user: OneUserType }) {
  const { t } = useTranslation();
  return (
    <Card bordered={false}>
      <div className="search-user-card">
        <div className="search-user-card-image">
          <Image
            width={170}
            height={180}
            src={user.image}
          />
        </div>
        <div className="search-user-card-body">
          <div className="search-user-card-info">
            <div className="div-80-2 search-user-name">
              <h2>{`${user.firstName} ${user.lastName}`}</h2>
              <Rate allowHalf defaultValue={5} disabled className="rate" />
            </div>
            <p>gaza</p>
            <div className="div-80-2 search-user-card-contact">
              <p>{user.email}</p>
              <p>{user.phone}</p>
            </div>
            {t('servicesOffer')}
            <div className="div-80-2 search-user-card-contact">
              <p>{user.email}</p>
              <p>{user.phone}</p>
            </div>
            <p className="search-user-card-services" />
            <p>{user.description}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default UserCard;
