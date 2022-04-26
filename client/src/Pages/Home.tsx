import React from 'react';
import { useTranslation } from 'react-i18next';
import { Divider } from 'antd';
import {
  MainServices,
  Reviews,
  SearchByLocation,
  JoinUs,
  WelcomeSearch,
} from '../Components';

const reviews = [
  {
    rate: 1,
    content: 'يعمل بشكل جيد ولكن من الممكن ان يكون اضل',
    userId: 1,
  },
  {
    rate: 5,
    content: 'مريح في العمل دقيق بالمواعيد ويعمل بمهارة',
    userId: 2,
  },
  {
    rate: 5,
    content: 'مريح في العمل دقيق بالمواعيد ويعمل بمهارة',
    userId: 2,
  },
  {
    rate: 3,
    content: 'مريح في العمل دقيق بالمواعيد ويعمل بمهارة',
    userId: 2,
  },
  {
    rate: 4.9,
    content: 'مريح في العمل دقيق بالمواعيد ويعمل بمهارة',
    userId: 2,
  },
];
const services = [
  {
    name: 'الحدادة',
  },
  {
    name: 'السباكة',
  },
  {
    name: 'النجارة',
  },
  {
    name: 'اعمال البناء',
  },
  {
    name: 'ميكانيكي سيارات',
  },
  {
    name: 'كهربائي',
  },
  {
    name: 'اعمال الدهان والجبس',
  },
  {
    name: 'اعمال التنضيف',
  },
  {
    name: 'حدائق وبستنة',
  },
  {
    name: 'اعمال النسيج',
  },
];
const locations = [
  {
    city: 'بيت حانون',
  },
  {
    city: 'بيت لاهيا',
  },
  {
    city: 'معسكر جباليا',
  },
  {
    city: 'جباليا ',
  },
  {
    city: 'غزة',
  },
  {
    city: 'الزهراء',
  },
  {
    city: 'النصيرات',
  },
  {
    city: 'دير البلح',
  },
  {
    city: 'المغازي',
  },
  {
    city: 'البريج',
  },
  {
    city: 'خانيونس',
  },
  {
    city: 'رفح',
  },
];
function Home() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="container">
        {t('home-greeting')}
        <WelcomeSearch location={locations} />
        <Divider />
        <MainServices mainServices={services} />
        <Divider />
        <SearchByLocation locationArray={locations} />
      </div>
      <JoinUs />
      <div className="container">
        <Reviews reviews={reviews} />
      </div>
    </div>
  );
}

export default Home;
