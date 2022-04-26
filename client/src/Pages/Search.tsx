import React from 'react';
import { useTranslation } from 'react-i18next';
import { UserCard } from '../Components';

function Search() {
  return (
    <div className="search-results-container">
      <div className="search-side">
        <h1>saleh</h1>
      </div>
      <div className="user-cards-container">
        <h1 className="page-header">{useTranslation().t('search-greeting')}</h1>
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  );
}

export default Search;
