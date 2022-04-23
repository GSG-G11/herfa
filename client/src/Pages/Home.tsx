import React from 'react';
import { useTranslation } from 'react-i18next';
import { HomeReview } from '../components';
import 'antd/dist/antd.css';

function Home() {
  return (
    <div className="container">
      {useTranslation().t('home-greeting')}
      <HomeReview
        rate={3.5}
        description=" اشتغلت مع هذا الحرفي لفترة من الزمن لقد كان العمل معه رائع جدا وكنت اتقاضى راتبا جيدا
        والله على ما اقول وكيل"
      />
    </div>
  );
}

export default Home;
