import React from 'react';
import { useTranslation } from 'react-i18next';
import SearchButton from './SearchButton';
import './style.css';

function SearchByLocation() {
  const { t } = useTranslation();

  return (
    <>
      <h2 className="headline-text">{t('home-search-location')}</h2>
      <div className="search-location-home-page-container">
        <SearchButton />
        <img className="location-image" src="/images/searchLocation.svg" alt="map to represent location and help search by location" />
      </div>
    </>
  );
}

export default SearchByLocation;
