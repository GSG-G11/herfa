import React from 'react';
import { useTranslation } from 'react-i18next';
import { UserCard } from '../Components';

const userInfo = {
  firstName: 'صباح',
  lastName: 'الرابي',
  email: 'stm1009#hotmail.com',
  password: '$2a$10$2DcYGTGfR06hcepi48.RCubqrqMrKyW1yD2RCZN1YU1UeNU/SC3bq',
  phone: '05928069997292222',
  whatsapp: '059544545',
  description: 'اعمل في مهنة الخياطة منذ 20 سنه وقمت  بتفصيل ازياء للمشاهير',
  image:
      'https://cdn.pixabay.com/photo/2020/06/01/22/23/eye-5248678__340.jpg',
  totalReview: 5,
};

const ArrayOfUsers = [userInfo, userInfo, userInfo, userInfo];

function Search() {
  return (
    <div className="search-results-container">
      <div className="search-side">
        <h1>saleh</h1>
      </div>
      <div className="user-cards-container">
        <h1 className="page-header">{useTranslation().t('search-greeting')}</h1>
        {ArrayOfUsers.map((user) => (
          <UserCard key={user.email} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Search;
