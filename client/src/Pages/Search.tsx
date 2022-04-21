import React from 'react';
import { useTranslation } from 'react-i18next';

function Search() {
  return (
    <div className="container">
      {useTranslation().t('search-greeting')}
    </div>
  );
}

export default Search;
