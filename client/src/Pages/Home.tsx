import React, { useEffect, useState } from 'react';
import { Divider } from 'antd';
import { request, HomeRequest } from '../utils';
import {
  MainServices,
  Reviews,
  SearchByLocation,
  JoinUs,
  WelcomeSearch,
  SpinierComponent,
} from '../Components';

function Home() {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [locations, setLocations] = useState([]);
  const [services, setServices] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const dataFromDB = async () => {
      try {
        const { data } : HomeRequest = await request('get', '/');
        setIsLoading(false);
        const locationCity: any = data.location;
        setLocations(locationCity);
        const dataServices: any = data.services;
        setServices(dataServices);
        const dataTopReviews: any = data.topTenReviews;
        setReviews(dataTopReviews);
      } catch (responseError: any) {
        setError(responseError?.data.msg);
        setIsLoading(false);
      }
    };
    dataFromDB();
  }, []);
  return (
    <div>
      {isLoading
        ? (
          <div className="spinier-loading">
            <SpinierComponent />
            <h2>{error}</h2>
          </div>
        )
        : (
          <>
            <div className="container">
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
          </>
        )}
    </div>
  );
}

export default Home;
