import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import {
  UserInfoCard, SpinierComponent, WorkList, Reviews, ErrorComponent, WorkModal,
} from '../Components';
import {
  Works, User, TopTenReviews, ProfileDataProps, WorksProps, request,
} from '../utils';
import { UserContext } from '../Context';
import { getUserProfileData, getWorksData } from '../Controllers';

function Profile() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<User>();
  const [image, setImage] = useState('');
  const [worksData, setWorksData] = useState<any>({ });
  const [reviewsArray, setReviewsArray] = useState<TopTenReviews[]>([]);
  const [reviewsAvg, setReviewsAvg] = useState<number>(0);
  const [error, setError] = useState('');
  const [workError, setWorkError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [workLoading, setWorkLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [resultCount, setResultCount] = useState<number>(1);
  const [isClickedAddWork, setIsClickedAddWork] = useState(false);
  const { t } = useTranslation();
  const { id = 1 } = useParams();
  const { user: userInfo }: any = useContext(UserContext);
  const handlePageChange = (PageNnm: number) => {
    setPage(PageNnm);
  };
  const onSuccess = (
    user:User,
    works:Works,
    reviews:TopTenReviews[],
    totalReviews:number,
    count:number,
  ) => {
    setReviewsArray(reviews);
    setReviewsAvg(totalReviews);
    setUserData(user);
    setWorksData({ ...worksData, [page]: works });
    setResultCount(count);
  };
  const onFailed = (err:any) => {
    if (err.data.msg === '"id" must be a number' || err.data.msg === 'user does not exist') {
      navigate('/user-not-found');
    }
    setError(err.data.msg);
  };
  const getUserProfileDataParams: ProfileDataProps = {
    setPage, setIsLoading, setImage, successCB: onSuccess, failedCB: onFailed, id: +id,
  };
  const onGetWorkSuccess = (works: Works) => {
    setWorksData({ ...worksData, [page]: works });
  };
  const onGetWorkFailed = (workErr: any) => {
    setWorkError(workErr);
  };
  const getWorkDataParams: WorksProps = {
    setWorkLoading,
    successCB: onGetWorkSuccess,
    failedCB: onGetWorkFailed,
    id: +id,
    page,
  };
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
  const addReview = (review: any) => {
    setReviewsArray([review, ...reviewsArray]);
  };
  const updateWorks = (id2: number, work: any) => {
    const newWork = worksData['1'].map((element: any) => {
      if (element.id === id2) { return work.data; }
      return element;
    });
    const data: any = {
      1: newWork,
    };
    setWorksData(data);
  };
  const deletedWork = (id1: number) => {
    const newWork = worksData['1'].filter((element: any) => element.id !== id1);
    const data: any = {
      1: newWork,
    };
    setWorksData(data);
  };
  useEffect(() => {
    getUserProfileData(getUserProfileDataParams);
  }, []);
  useEffect(() => {
    if (!worksData[page]) {
      getWorksData(getWorkDataParams);
    }
  }, [page]);
  const isAuth = {
    isAuth: userInfo?.providerID === +id,
  };

  if (isLoading) return <SpinierComponent />;
  if (error) return <ErrorComponent errorMessage={error} />;
  return (
    <>
      <div className="container work-card-container">
        <UserInfoCard
          userInfo={{ user: userData, totalReviews: reviewsAvg, addReview }}
          image={image}
          setImage={setImage}
          isAuth={isAuth.isAuth}
        />
      </div>
      {isAuth.isAuth && (
        <div className="show-add-work-modal container">
          <Button type="primary" onClick={() => setIsClickedAddWork(true)} icon={<PlusOutlined />}>{t('add-button')}</Button>
        </div>
      )}
      <WorkModal
        visible={isClickedAddWork}
        handelVisible={setIsClickedAddWork}
        modalText={t('add-button')}
        handelFinisher={addWork}
        addSuccessWork={addSuccessWork}
      />
      <WorkList
        worksData={worksData[page]}
        page={page}
        handlePageChange={handlePageChange}
        resultCount={resultCount}
        isAuth={isAuth}
        isLoading={workLoading}
        error={workError}
        updateWorks={updateWorks}
        deletedWork={deletedWork}
      />
      <Reviews data={reviewsArray} />
    </>
  );
}

export default Profile;
