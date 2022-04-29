import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { UserCard } from '../Components';

function Search() {
  const location = useLocation();
  const search : any = location.state;
  const { serviceSearch, locationSearch, craftsmanSearch } = search;
  const userInfo = {
    firstName: 'صباح',
    lastName: 'الرابي',
    email: 'stm1009#hotmail.com',
    phone: '05928069997292222',
    whatsapp: '059544545',
    description: 'اعمل في مهنة الخياطة منذ 20 سنه وقمت  بتفصيل ازياء للمشاهير',
    image:
        'https://cdn.pixabay.com/photo/2020/06/01/22/23/eye-5248678__340.jpg',
    totalReview: 5,
    subServices: [],
  };
  const ArrayOfUsers = [userInfo, userInfo, userInfo, userInfo];

  return (
    <div className="container">
      {useTranslation().t('search-greeting')}
      <h1>{`data from home page location => ${locationSearch}`}</h1>
      <h1>{`data from home page craftsman => ${craftsmanSearch}`}</h1>
      <h1>{`data from home page service => ${serviceSearch}`}</h1>
      <div className="search-results-container">
        <div className="search-side">
          <h1>saleh</h1>
        </div>
        <div className="user-cards-container">
          <h1 className="page-header">{useTranslation().t('search-greeting')}</h1>
          {ArrayOfUsers.map((user) => <UserCard key={user.email} user={user} />)}
        </div>
      </div>
    </div>
  );
}

export default Search;
