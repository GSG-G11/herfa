import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

function Search() {
  const location = useLocation();
  const search : any = location.state;
  const { serviceSearch, locationSearch, craftsmanSearch } = search;

  return (
    <div className="container">
      {useTranslation().t('search-greeting')}
      <h1>{`data from home page location => ${locationSearch}`}</h1>
      <h1>{`data from home page craftsman => ${craftsmanSearch}`}</h1>
      <h1>{`data from home page service => ${serviceSearch}`}</h1>
    </div>
  );
}

export default Search;
