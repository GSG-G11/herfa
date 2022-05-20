import React, { useContext } from 'react';
import { Divider } from 'antd';
import { useTranslation } from 'react-i18next';
import {
  MainServices,
  Reviews,
  SearchByLocation,
  JoinUs,
  WelcomeSearch,
  SpinierComponent,
  ErrorComponent,
} from '../Components';
import { ServiceLocation } from '../Context';

function Home() {
  const { t } = useTranslation();
  const {
    checks: { error, isLoading, errorExist },
    data: { topTenReviews },
  } = useContext(ServiceLocation);

  if (isLoading) return <SpinierComponent />;
  if (errorExist) return <ErrorComponent errorMessage={error} />;
  return (
    <>
      <div className="container">
        <WelcomeSearch />
        <Divider />
        <MainServices />
        <Divider />
        <SearchByLocation />
      </div>
      <JoinUs />
      <div className="container">
        <h2 className="headline-text">
          {t('what-they-say-about-us')}
        </h2>
        <Reviews data={topTenReviews} />
      </div>
    </>
  );
}

export default Home;
