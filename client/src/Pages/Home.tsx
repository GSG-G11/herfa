import React, { useContext } from 'react';
import { Divider } from 'antd';
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
  const { checks: { error, isLoading, errorExist } } = useContext(ServiceLocation);
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
                <Reviews />
              </div>
            </>
          ),
        )
      }
    </div>
  );
}

export default Home;
