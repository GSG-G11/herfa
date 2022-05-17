/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import {
  Card, Image, Rate, Button, message,
} from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { useTranslation } from 'react-i18next';
import './style.css';
import axios from 'axios';
import { OneService, UserInfoCardProps } from '../../utils';
import ReviewFormModal from '../ModalRating';
import ImgUpload from '../ProfileImageUpload';

function UserInfoCard({ userInfo, image, setImage }: UserInfoCardProps) {
  const {
    user: {
      id,
      first_name: firstName,
      last_name: lastName,
      services,
      phone,
      email,
      description,
      location,
      whatsapp,
      main_service: mainService,
      facebook_link: facebookLink,
      instagram_link: instagramLink,
    },
    totalReviews,
    addReview,
  } = userInfo;
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const onCreate = async (values: any) => {
    try {
      setVisible(false);
      const formData = { ...values, userId: id };
      const response = await axios.post('/api/v1/reviews', formData);
      addReview(response.data.data);
      message.success(t('review-message'), 5);
    } catch (error:any) {
      if (error.response.status === 400) {
        message.error(t('review-exists'), 5);
      } else if (error.response.status === 500) {
        message.error(t('server-error'), 5);
      }
    }
  };
  return (
    <Card bordered={false}>
      <div className="card">
        <div className="image">
          <Image width={150} src={image} />
          <ImgUpload userId={id} setImage={setImage} />
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
            {mainService.name}
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
            <a href={instagramLink}>
              {' '}
              <FontAwesomeIcon
                style={{ color: '#AA38A5' }}
                icon={faInstagram}
                size="2x"
              />
            </a>
            <a href={facebookLink}>
              {' '}
              <FontAwesomeIcon
                style={{ color: '#009FD9' }}
                icon={faFacebook}
                size="2x"
              />
            </a>
          </div>

          <div className="footer">
            <a href={`https://wa.me/${whatsapp}`}>
              <span>
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  size="2x"
                  style={{ color: '#56A309' }}
                />
                {' '}
                {t('contactMe')}
              </span>
            </a>
            <span>
              <Button
                type="text"
                onClick={() => {
                  setVisible(true);
                }}
              >
                <div>
                  <FontAwesomeIcon
                    icon={faStar}
                    size="lg"
                    style={{ color: '#FADB14' }}
                  />
                  {t('review')}
                </div>
              </Button>
            </span>
            <ReviewFormModal
              visible={visible}
              onCreate={onCreate}
              onCancel={() => {
                setVisible(false);
              }}
              userId={id}
            />
          </div>
        </div>
      </div>
    </Card>
  );
}

export default UserInfoCard;
