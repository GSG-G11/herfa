import React from 'react';
import { useTranslation } from 'react-i18next';
import Reviews from '../Components';

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

function Home() {
  const { t } = useTranslation();
  return (
    <div className="container">
      {t('home-greeting')}
      {reviews && <Reviews reviews={reviews} />}
    </div>
  );
}

export default Home;
