import React, { useEffect, useState } from 'react';
import { Pagination, Carousel } from 'antd';
import { WorkCard, UserInfoCard } from '../Components';
import {
  Works, OnWork, request, ProfileInfoResponse, User, UserResponse, Reviews,
} from '../utils';
import ReviewCard from '../Components/Reviews/ReviewCard';

function Profile() {
  const [userData, setUserData] = useState<User>();
  const [worksData, setWorksData] = useState<Works>([]);
  const [reviewsArray, setReviewsArray] = useState([{}]);
  const [reviewsAvg, setReviewsAvg] = useState<number>(0);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [resultCount, setResultCount] = useState<number>(1);

  const handlePageChange = (PageNnm: number) => {
    setPage(PageNnm);
  };
  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(false);
        const response : ProfileInfoResponse = await request('get', `/providers/2?page=${page}`);
        const { data } : {data: UserResponse} = response;
        const { user } : {user: User} = data;
        const { works }: { works: Works } = data;
        const { reviews }: { reviews: Reviews } = data;
        const { totalReviews }: { totalReviews: number} = data;
        const { count } = data;
        setReviewsArray(reviews);
        setReviewsAvg(totalReviews);
        setUserData(user);
        setWorksData(works);
        setResultCount(count);
      } catch (responseError: any) {
        setError(responseError?.data.msg);
        setIsLoading(false);
      }
    };
    getData();
  }, [page]);
  const act = {
    edit() {},
    setting() {},
  };
  const isAuth = {
    isAuth: true,
  };
  return (
    <div className="container">
      { console.log(reviewsAvg)}
      { console.log(reviewsArray)}
      { console.log(userData)}
      { console.log(page)}
      {isLoading ? (
        <h1>
          loading
          {error}
        </h1>
      ) : (
        <>
          {userData && <UserInfoCard userInfo={{ user: userData, totalReviews: reviewsAvg }} />}
          <div className="work-card-container">
            {worksData?.map((work: OnWork) => (
              <WorkCard key={work?.id} work={work} actions={act} isAuth={isAuth} />
            ))}
          </div>
        </>
      )}
      <div className="pagination">
        <Pagination
          defaultCurrent={1}
          onChange={handlePageChange}
          total={resultCount}
          defaultPageSize={5}
        />
      </div>
      <div className="reviewsSection">
        <h2 className="headline-text">
          what-they-say-about-us
        </h2>
        <div className="carouselContainer">
          <Carousel autoplay arrows className="reviewSlider">
            {reviewsArray?.map(
              (item: any) => <ReviewCard key={item.userId} review={item} />,
            )}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Profile;
