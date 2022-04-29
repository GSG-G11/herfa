import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Select, Input, Button, Divider,
} from 'antd';
import { Link } from 'react-router-dom';
import './style.css';
import { locationObject } from '../../utils';

interface ListOfLocation {
  location:
  locationObject [],
}

function WelcomeSearch({ location } : ListOfLocation) {
  const { t } = useTranslation();
  const [locationSearch, setLocationSearch] = useState(0);
  const [craftsmanSearch, setCraftsmanSearch] = useState('');
  const { Option } = Select;
  return (
    <div className="basic-container-welcome-home-page">
      <div className="welcome-search-home-right">
        <h2>{t('home-welcome-search')}</h2>
        <Divider className="divider-welcome-home-page" />
        <Input.Group compact>
          <Input className="search-craftsman-name" placeholder={t('home-search-name')} size="middle" onChange={(e: any) => setCraftsmanSearch(e.target.value)} />
          <Select placeholder={t('city')} size="middle" onSelect={(citySearched: any) => setLocationSearch(citySearched)}>
            {location.map((item: locationObject) => (
              <Option key={item.id} value={item.id}>
                {item.city}
              </Option>
            ))}
          </Select>
          <Button size="middle" type="primary">
            <Link to="/search" state={{ locationSearch, craftsmanSearch }}>
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
