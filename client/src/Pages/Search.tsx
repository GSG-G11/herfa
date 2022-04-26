import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

function Search() {
  const location = useLocation();
  const searchLocation = location.state;

  return (
    <div className="container">
      {useTranslation().t('search-greeting')}
      <h1>{`${searchLocation}`}</h1>
    </div>
  );
}

export default Search;
