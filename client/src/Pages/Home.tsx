/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { Divider } from 'antd';
import {
  request, HomeRequest, locationObject, serviceObject, TopTenReviews,
} from '../utils';
import {
  MainServices,
  Reviews,
  SearchByLocation,
  JoinUs,
  WelcomeSearch,
  SpinierComponent,
  ErrorComponent,
} from '../Components';

export interface DataFromDB {
  location: locationObject[];
  services: serviceObject[];
  topTenReviews: TopTenReviews[];
}

function Home() {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [errorExist, setErrorExist] = useState(false);
  const [locations, setLocations] = useState<locationObject[]>([]);
  const [service, setServices] = useState<serviceObject[]>([]);
  const [reviews, setReviews] = useState<TopTenReviews[]>([]);

  useEffect(() => {
    const dataFromDB = async () => {
      try {
        const { data } : HomeRequest = await request('get', '/');
        setIsLoading(false);
        const { location, services, topTenReviews } = data;
        setLocations(location);
        setServices(services);
        setReviews(topTenReviews);
      } catch (responseError: any) {
        setError(responseError?.data.msg);
        setErrorExist(true);
        setIsLoading(false);
      }
    };
    dataFromDB();
  }, []);
  return (
    <div>
      {errorExist ? <ErrorComponent errorMessage={error} />
        : isLoading
          ? <SpinierComponent />
          : (
            <>
              <div className="container">
                <WelcomeSearch location={locations} />
                <Divider />
                <MainServices mainServices={service} />
                <Divider />
                <SearchByLocation locationArray={locations} />
              </div>
              <JoinUs />
              <div className="container">
                <Reviews reviews={reviews} />
              </div>
            </>
          )}
    </div>
  );
}

export default Home;
