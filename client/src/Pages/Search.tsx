import React from 'react';
import { FilterSection, UserCard } from '../Components';
import ServiceLocationContext from '../Context/ServiceLocationContext';

function Search() {
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
  const ArrayOfUsers = [userInfo];

  return (
    <div className="container">
      <div className="search-results-container">
        <ServiceLocationContext>
          <FilterSection />
        </ServiceLocationContext>
        <div className="user-cards-container">
          {ArrayOfUsers.map((user) => <UserCard key={user.email} user={user} />)}
        </div>
      </div>
    </div>
  );
}

export default Search;
