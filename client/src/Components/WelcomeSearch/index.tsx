/* eslint-disable react/no-unstable-nested-components */
// eslint-disable-next-line react/no-unstable-nested-components
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Select, Input, Button, Divider,
} from 'antd';
import { Link } from 'react-router-dom';
import './style.css';

interface ListOfLocation {
  location: {
        city:string,
    }[],
}

function WelcomeSearch({ location } : ListOfLocation) {
  const { t } = useTranslation();
  const { Option } = Select;
  return (
    <div className="basic-container-welcome-home-page">
      <div className="welcome-search-home-right">
        <h2>{t('home-welcome-search')}</h2>
        <Divider className="divider-welcome-home-page" />
        <Input.Group compact>
          <Input style={{ width: '50%' }} placeholder="what to search for" size="middle" />
          <Select defaultValue={t('city')} size="middle" style={{ width: '20%' }}>
            {location.map((item) => <Option key={item.city} value={item.city}>{item.city}</Option>)}
          </Select>
          <Button size="middle" type="primary">
            <Link to="/search">
              <span className="search-link">{t('home-search-word')}</span>
            </Link>
          </Button>
        </Input.Group>
      </div>
      <div className="welcome-search-home-left">
        <img src="/images/welcome-page.svg" alt="construction worker work together" />
      </div>
    </div>
  );
}

export default WelcomeSearch;
