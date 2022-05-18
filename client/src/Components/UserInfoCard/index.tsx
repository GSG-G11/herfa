import React, { useState } from 'react';
import {
  Card, Image, Rate, Button, message, Typography,
} from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './style.css';
import axios from 'axios';
import { OneService, UserInfoCardProps } from '../../utils';
import ReviewFormModal from '../ModalRating';
import ImgUpload from '../ProfileImageUpload';

function UserInfoCard({
  userInfo, image, setImage, isAuth,
}: UserInfoCardProps) {
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
  const { Title } = Typography;
  return (
    <Card bordered={false}>
      <div className="profile-card">
        <div className="profile-image">
          <div className="image"><Image src={image} /></div>
          {isAuth && <ImgUpload userId={id} setImage={setImage} />}
        </div>
        <div className="card-info">
          <div className="name">
            <Title level={3}>{`${firstName} ${lastName}`}</Title>
            <Rate
              allowHalf
              defaultValue={totalReviews}
              disabled
              className="rate"
            />
          </div>
          <p className="card-description">{description}</p>
          <Link to="/search" state={{ locationSearch: location.id }}>{location.city}  -</Link>
          <Link to="/search" state={{ serviceSearch: mainService.id }}> {mainService.name}</Link>

          <br />
          {services
              && services.map((service: OneService) => (
                <span key={service.id} className="service">
                  {`${service.name} - `}
                </span>
              ))}
        </div>
        <div className="contact">
          <p><a href={`mailto:${email}`}>{email}</a></p>
          <p>{phone}</p>
          <div className="social">
            <a href={instagramLink}>
              {' '}
              <FontAwesomeIcon
                style={{ color: '#E1306C' }}
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
              <p className="whatsapp-btn">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  size="2x"
                  style={{ color: '#FFF' }}
                />
                {' '}
                <div className="button-titles">{t('contactMe')}</div>
              </p>
            </a>
            <span className="rate">
              <Button
                type="primary"
                onClick={() => {
                  setVisible(true);
                }}
              >
                <FontAwesomeIcon
                  icon={faStar}
                  size="lg"
                  style={{ color: '#fff' }}
                />
                <div className="rate-text">
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
