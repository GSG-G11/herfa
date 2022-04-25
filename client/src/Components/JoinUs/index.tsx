import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import './style.css';

function JoinUs() {
  const { t } = useTranslation();
  return (
    <div className="join-container">
      <div>
        <h2 className="headline-text">{t('home-join-us')}</h2>
        <p className="inner-text">{t('home-join-us-description')}</p>
        <Button type="primary" size="large" href="/signup">
          {t('home-join-us-button')}
        </Button>
      </div>
      <img className="join-us-image" src="/images/join-home-page.svg" alt="friendly promote user to join us as a craftsman" />
    </div>
  );
}

export default JoinUs;
