import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import { WorkCard, UserInfoCard, WorkModal } from '../Components';
import {
  Works, Request, AllWorks, OnWork, request,
} from '../utils';

function Profile() {
  const { t } = useTranslation();

  const [userData, setUserData] = useState({});
  const [image, setImage] = useState('');
  const [worksData, setWorksData] = useState<AllWorks>({ 1: [] });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isClickedAddWork, setIsClickedAddWork] = useState(false);

  const addWork = async (values: object) => {
    const data = await request('post', '/work', values);
    return data;
  };
  const addSuccessWork = (work: any) => {
    const data: any = {
      1: [work, ...worksData['1']],
    };
    setWorksData(data);
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const { data }: Request = await request('get', '/providers/2');
        const { works }: { works: Works } = data;
        const workPage: any = {
          1: [...works],
        };
        const userInfoData = {
          user: data.user,
          reviews: data.reviews,
          totalReviews: data.totalReviews,
        };
        setIsLoading(false);
        setUserData(userInfoData);
        setWorksData(workPage);
        setImage(userInfoData.user.image);
      } catch (responseError: any) {
        setError(responseError?.data.msg);
        setIsLoading(false);
      }
    };
    getData();
  }, []);
  const isAuth = {
    isAuth: true,
  };
  const updateWorks = (id: number, work: any) => {
    const newWork = worksData['1'].map((element: any) => {
      if (element.id === id) { return work.data; }
      return element;
    });
    const data: any = {
      1: newWork,
    };
    setWorksData(data);
  };
  const deletedWork = (id: number) => {
    const newWork = worksData['1'].filter((element: any) => element.id !== id);
    const data: any = {
      1: newWork,
    };
    setWorksData(data);
  };
  return (
    <div className="container">
      {isLoading ? (
        <h1>
          loading
          {' '}
          {error}
        </h1>
      ) : (
        <>
          <UserInfoCard userInfo={userData} image={image} setImage={setImage} />
          <Button type="primary" onClick={() => setIsClickedAddWork(true)}>{t('add-button')}</Button>
          <WorkModal
            visible={isClickedAddWork}
            handelVisible={setIsClickedAddWork}
            modalText={t('add-button')}
            handelFinisher={addWork}
            addSuccessWork={addSuccessWork}
          />
          <br />
          <div className="work-card-container">
            {worksData[1].map((work: OnWork) => (
              <WorkCard
                key={work.id}
                work={work}
                isAuth={isAuth}
                updateWorks={updateWorks}
                deletedWork={deletedWork}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Profile;
