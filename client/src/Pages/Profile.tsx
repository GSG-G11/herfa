import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import WorkCard from '../Components/WorkCard/WorkCard';
import UserInfoCard from '../Components/UserInfoCard';
// eslint-disable-next-line import/extensions
import request from '../utils/axios';
import {
  Works, Request, AllWorks, OnWork,
} from '../utils/types/profile';

function Profile() {
  const [userData, setData] = useState({});
  const [allWorks, setWorks] = useState<AllWorks>({ 1: [] });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data }: Request = await request('get', '/providers/2');
        const { works }: { works: Works } = data;
        const allWorks1: any = {
          1: [...works],
        };
        setIsLoading(false);
        setData(data);
        setWorks(allWorks1);
      } catch (error1: any) {
        setError(error1?.data.msg);
      }
    };
    getData();
  }, []);
  const act = {
    edit() {},
    setting() {},
  };
  const isAuth = {
    isAuth: true,
  };
  return (
    <>
      {isLoading ? (
        <h1>
          loading
          {' '}
          {error}
        </h1>
      ) : (
        <>
          <UserInfoCard userInfo={userData} />
          <div className="work-card-container">
            {allWorks[1].map((work: OnWork) => (
              <WorkCard work={work} actions={act} isAuth={isAuth} />
            ))}
          </div>
        </>
      )}
      {useTranslation().t('profile-greeting')}
    </>
  );
}

export default Profile;
