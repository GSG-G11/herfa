import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import WorkCard from '../Components/WorkCard/WorkCard';
import UserInfoCard from '../Components/UserInfoCard';
import request from '../utils/axios';

interface Request {
  data: {
    user: any;
    reviews: any;
    works:any;
  };
}
interface WorksRequest {
  works:any
}

function Profile() {
  const [userData, setData] = useState({ works: [] });
  const [worksState, setWorks] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data }: Request = await request('get', '/providers/2');
        const { works }: WorksRequest = data;
        setIsLoading(false);
        setData(data);
        setWorks(works);
      } catch (error1: any) {
        setError(error1?.response.data.msg);
        console.log(error);
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
        <h1>looooooooooding</h1>
      ) : (
        <>
          <UserInfoCard userInfo={userData} />
          <div className="work-card-container">
            {worksState.map((work: any) => (
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
