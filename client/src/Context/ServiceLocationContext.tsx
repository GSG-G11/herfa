import React, {
  useEffect, useState, createContext, useMemo,
} from 'react';
import {
  request, HomeRequest, locationObject, serviceObject, TopTenReviews, Context,
} from '../utils';

const contextDefault : Context = {
  data: {
    location: [{ city: '', id: 0 }],
    services: [{ name: '', id: 0 }],
    topTenReviews: [{ rate: 0, content: '', userId: 0 }],
  },
  checks: {
    error: '',
    errorExist: false,
    isLoading: true,
  },
};

export const ServiceLocation = createContext<Context>(contextDefault);

function ServiceLocationContext(props:any) {
  const [error, setError] = useState('');
  const [errorExist, setErrorExist] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [locationsArray, setLocations] = useState<locationObject[]>([]);
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

  const values = useMemo(() => ({
    data: {
      location: locationsArray,
      services: service,
      topTenReviews: reviews,
    },
    checks: {
      error,
      errorExist,
      isLoading,
    },
  }), [error, errorExist, isLoading, locationsArray, service, reviews]);

  const { children } = props;
  return (
    <ServiceLocation.Provider value={values}>
      {children}
    </ServiceLocation.Provider>
  );
}

export default ServiceLocationContext;
