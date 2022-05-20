import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, Link } from 'react-router-dom';
import { Input, Button } from 'antd';
import './style.css';

function SearchByLocation() {
  const { t } = useTranslation();
  const [searchValueFromInput, setSearchValueFromInput] = useState();
  const navigate = useNavigate();
  return (
    <>
      <h2 className="headline-text">{t('home-search-name')}</h2>
      <div className="search-location-home-page-container">
        <div className="inputs-search-by-name">
          <Input
            onPressEnter={(e: any) => { if (e.key === 'Enter') navigate('/search', { state: { searchName: searchValueFromInput } }); }}
            placeholder={t('search-name')}
            onChange={(e: any) => setSearchValueFromInput(e.target.value)}
            size="middle"
            className="name-search-home-page"
          />
          <Link to="/search" state={{ searchName: searchValueFromInput }}>
            <Button type="primary">
              {t('search')}
            </Button>
          </Link>
        </div>
        <img className="location-image" src="/images/searchByName.svg" alt="map to represent location and help search by location" />
      </div>
    </>
  );
}

export default SearchByLocation;
