import React from 'react';
import { Typography, Button } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import NotFoundImage from '../assets/notFound.svg';

function NotFound() {
  const { Title, Text } = Typography;
  const { t } = useTranslation();
  return (
    <div className="container not-found-container">
      <div className="mainBox">
        <img src={NotFoundImage} alt="Not Found" />
      </div>
      <Title level={2}>{t('notFound')}</Title>
      <Text className="not-found-description">{t('notFoundDescription')}</Text>
      <Link to="/"> <Button type="primary">{t('goHome')}</Button></Link>
    </div>
  );
}

export default NotFound;
