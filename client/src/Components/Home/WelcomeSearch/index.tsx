import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Select, Input, Button, Divider,
} from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';
import { locationObject } from '../../../utils';
import { ServiceLocation } from '../../../Context';

function WelcomeSearch() {
  const { t } = useTranslation();
  const { Option } = Select;
  const { data: { location } } = useContext(ServiceLocation);
  const navigate = useNavigate();
  return (
    <div className="basic-container-welcome-home-page">
      <div className="welcome-search-home-right">
        <h2>{t('home-welcome-search')}</h2>
        <Divider className="divider-welcome-home-page" />
        <Input.Group compact className="inputs-group-home-page">
          <Select
            className="search-location-home"
            placeholder={t('city')}
            size="middle"
            onSelect={(citySearched: any) => navigate('/search', { state: { locationSearch: citySearched } })}
          >
            {location.map((item: locationObject) => (
              <Option key={item.city} value={item.id}>
                {t(item.city)}
              </Option>
            ))}
          </Select>
        </Input.Group>
        <Button size="middle" type="primary" className="sign-up">
          <Link to="/signup">
            <span className="search-link">{t('Sign Up')}</span>
          </Link>
        </Button>
      </div>
      <div className="welcome-search-home-left">
        <img src="/images/welcome-page.svg" alt="construction worker work together" />
      </div>
    </div>
  );
}

export default WelcomeSearch;
