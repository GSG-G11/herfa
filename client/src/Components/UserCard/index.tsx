/* eslint-disable camelcase */
import React from 'react';
import { Card, Image, Rate } from 'antd';
import { useTranslation } from 'react-i18next';
import './style.css';

const saleh = {
  firstName: 'صباح',
  lastName: 'الرابي',
  email: 'sabahrabeye@hotmail.com',
  password: '$2a$10$2DcYGTGfR06hcepi48.RCubqrqMrKyW1yD2RCZN1YU1UeNU/SC3bq',
  phone: '05928069997292222',
  whatsapp: '059544545',
  description: 'اعمل في مهنة الخياطة منذ 20 سنه وقمت  بتفصيل ازياء للمشاهير',
};
function UserCard() {
  const { t } = useTranslation();
  return (
    <Card bordered={false}>
      <div className="search-user-card">
        <div className="search-user-card-image">
          <Image
            width={170}
            height={180}
            src="https://cdn.pixabay.com/photo/2020/06/01/22/23/eye-5248678__340.jpg"
          />
        </div>
        <div className="search-user-card-body">
          <div className="search-user-card-info">
            <div className="div-80-2 search-user-name">
              <h2>{`${saleh.firstName} ${saleh.lastName}` }</h2>
              <Rate allowHalf defaultValue={5} disabled className="rate" />
            </div>
            <p>gaza</p>
            <div className="div-80-2 search-user-card-contact">
              <p>{saleh.email}</p>
              <p>{saleh.phone}</p>
            </div>
            {t('servicesOffer')}
            <div className="div-80-2 search-user-card-contact">
              <p>{saleh.email}</p>
              <p>{saleh.phone}</p>
            </div>
            <p className="search-user-card-services" />
            <p>{saleh.description}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default UserCard;
