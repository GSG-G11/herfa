import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import {
  UserInfoCard, SpinierComponent, WorkList, Reviews, ErrorComponent,
} from '../Components';
import {
  Works, User, TopTenReviews, ProfileDataProps, WorksProps,
} from '../utils';
import { UserContext } from '../Context/LoggedUserContext';
import getUserProfileData from '../Controllers/getProfileData';
import getWorksData from '../Controllers/getWorks';

const iff = (condition :any, then :any, otherwise :any) => (condition ? then : otherwise);

function Profile() {
  const [userData, setUserData] = useState<User>();
  const [worksData, setWorksData] = useState<Works>([]);
  const [reviewsArray, setReviewsArray] = useState<TopTenReviews[]>([]);
  const [reviewsAvg, setReviewsAvg] = useState<number>(0);
  const [error, setError] = useState('');
  const [workError, setWorkError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [workLoading, setWorkLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [resultCount, setResultCount] = useState<number>(1);
  const { id = 1 } = useParams();
  const userInfo: any = useContext(UserContext);
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
    setWorksData(works);
    setResultCount(count);
  };
  const onFailed = (err:any) => {
    setError(err?.data.msg);
  };
  const getUserProfileDataParams: ProfileDataProps = {
    setPage, setIsLoading, successCB: onSuccess, failedCB: onFailed, id: +id,
  };
  const onGetWorkSuccess = (works: Works) => {
    setWorksData(works);
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
  useEffect(() => {
    getUserProfileData(getUserProfileDataParams);
  }, []);
  useEffect(() => {
    getWorksData(getWorkDataParams);
  }, [page]);
  const isAuth = {
    isAuth: userInfo?.providerID === +id,
  };
  return (
    <div className="container">
      {isLoading ? <SpinierComponent /> : iff(
        !error,
        <>
          <UserInfoCard userInfo={{ user: userData, totalReviews: reviewsAvg }} />
          <WorkList
            worksData={worksData}
            page={page}
            handlePageChange={handlePageChange}
            resultCount={resultCount}
            isAuth={isAuth}
            isLoading={workLoading}
            error={workError}
          />
          <Reviews data={reviewsArray} />
        </>,
        <ErrorComponent errorMessage={error} />,
      )}
    </div>
  );
}

export default Profile;
