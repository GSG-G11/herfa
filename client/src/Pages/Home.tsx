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
import { ServiceLocation } from '../Context/ServiceLocationContext';

function Home() {
  const { t } = useTranslation();
  const {
    checks: { error, isLoading, errorExist },
    data: { topTenReviews },
  } = useContext(ServiceLocation);

  const iff = (condition :any, then :any, otherwise :any) => (condition ? then : otherwise);
  return (
    <div>
      {
        errorExist ? <ErrorComponent errorMessage={error} /> : iff(
          isLoading,
          <SpinierComponent />,
          (
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
          ),
        )
      }
    </div>
  );
}

export default Home;
