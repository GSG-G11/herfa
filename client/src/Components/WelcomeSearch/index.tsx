import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Select, Input, Button, Divider,
} from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';
import { locationObject } from '../../utils';
import { ServiceLocation } from '../../Context/ServiceLocationContext';

function WelcomeSearch() {
  const { t } = useTranslation();
  const [locationSearch, setLocationSearch] = useState();
  const { Option } = Select;
  const { data: { location, users } } = useContext(ServiceLocation);
  const navigate = useNavigate();
  return (
    <div className="basic-container-welcome-home-page">
      <div className="welcome-search-home-right">
        <h2>{t('home-welcome-search')}</h2>
        <Divider className="divider-welcome-home-page" />
        <Input.Group compact className="inputs-group-home-page">
          <Select
            size="middle"
            showSearch
            placeholder={t('home-search-word')}
            className="search-craftsman-name"
            optionFilterProp="children"
            onSelect={(userId: number) => navigate(`/user/${userId}`)}
          >
            {users.map(
              (item) => <Option value={item.id} key={item.id}>{`${item.first_name} ${item.last_name}`}</Option>,
            )}
          </Select>
          <Select placeholder={t('city')} size="middle" onSelect={(citySearched: any) => setLocationSearch(citySearched)}>
            {location.map((item: locationObject) => (
              <Option key={item.city} value={item.id}>
                {item.city}
              </Option>
            ))}
          </Select>
          <Button size="middle" type="primary">
            <Link to="/search" state={{ locationSearch }}>
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
