import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import './style.css';

function JoinUs() {
  const { t } = useTranslation();
  return (
    <div className="join-container">
      <div className="join-inner-container">
        <div className="join-right-section">
          <h2 className="headline-text">{t('home-join-us')}</h2>
          <p className="inner-text">{t('home-join-us-description')}</p>
          <Button type="primary" size="large">
            <Link to="/signup">
              <span className="search-link">{t('home-join-us-button')}</span>
            </Link>
          </Button>
        </div>
        <img className="join-us-image" src="/images/join-home-page.svg" alt="friendly promote user to join us as a craftsman" />
      </div>
    </div>
  );
}

export default JoinUs;
