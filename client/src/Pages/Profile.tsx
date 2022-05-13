import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  UserInfoCard, SpinierComponent, WorkList, Reviews, ErrorComponent,
} from '../Components';
import {
  Works, User, TopTenReviews, ProfileDataProps, WorksProps,
} from '../utils';
import { UserContext } from '../Context/LoggedUserContext';
import { getUserProfileData, getWorksData } from '../Controllers';

const iff = (condition :any, then :any, otherwise :any) => (condition ? then : otherwise);

function Profile() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<User>();
  const [worksData, setWorksData] = useState<any>({ });
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
    setPage, setIsLoading, successCB: onSuccess, failedCB: onFailed, id: +id,
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
  return (
    <div className="container">
      {isLoading ? <SpinierComponent /> : iff(
        !error,
        <>
          <UserInfoCard userInfo={{ user: userData, totalReviews: reviewsAvg }} />
          <WorkList
            worksData={worksData[page]}
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
