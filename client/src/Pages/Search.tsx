import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

function Search() {
  const location = useLocation();
  const search : any = location.state;

  return (
    <div className="container">
      {useTranslation().t('search-greeting')}
      <h1>{`data from home page location => ${search.locationSearch}`}</h1>
      <h1>{`data from home page craftsman => ${search.craftsmanSearch}`}</h1>
    </div>
  );
}

export default Search;
