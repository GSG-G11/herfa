import React from 'react';
import { useTranslation } from 'react-i18next';
import WorkCard from '../Components/WorkCard/WorkCard';

const work = {
  title: 'Europe saleh  Street beat',
  content: 'www.saleeeeeeeeeeeeeeh.com',
  image: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
  userId: 1,
};
function Profile() {
  return (
    <div className="container">
      {useTranslation().t('profile-greeting')}
      <div className="work-card-container">
        <WorkCard work={work} />
        <WorkCard work={work} />
        <WorkCard work={work} />
        <WorkCard work={work} />
        <WorkCard work={work} />
        <WorkCard work={work} />
      </div>
    </div>
  );
}

export default Profile;
