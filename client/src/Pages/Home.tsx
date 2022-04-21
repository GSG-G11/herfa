import React from 'react';
import { useTranslation } from 'react-i18next';

function Home() {
  return (
    <div className="container">
      {useTranslation().t('home-greeting')}
    </div>
  );
}

export default Home;
