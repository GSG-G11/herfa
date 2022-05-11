import {
  ProfileInfoResponse, request, UserResponse, User, Works, TopTenReviews, ProfileDataProps,
} from '../utils';

const getUserProfileData = async (
  {
    setPage,
    setIsLoading,
    successCB,
    failedCB,
    id,
  } : ProfileDataProps,
) => {
  try {
    setPage(1);
    setIsLoading(true);
    const response : ProfileInfoResponse = await request('get', `/providers/${id}`);
    const { data } : {data: UserResponse} = response;
    const { user } : {user: User} = data;
    const { works }: { works: Works } = data;
    const { reviews }: { reviews: TopTenReviews[] } = data;
    const { totalReviews }: { totalReviews: number} = data;
    const { count } = data;
    successCB(user, works, reviews, totalReviews, count);
    setIsLoading(false);
  } catch (responseError: any) {
    failedCB(responseError.data.msg);
    setIsLoading(false);
  }
};
export default getUserProfileData;
