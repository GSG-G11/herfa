import {
  ProfileInfoResponse,
  request,
  UserResponse,
  ProfileDataProps,
  ProviderDataType,
} from '../utils';

const getUserProfileData = async (
  {
    setImage,
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
    setIsLoading(false);
    const { data } : {data: UserResponse} = response;
    const {
      user, works, reviews, totalReviews, count,
    } : ProviderDataType = data;
    if (user.image === null) {
      setImage('/images/profile.svg');
    } else { setImage(user.image); }
    successCB(user, works, reviews, totalReviews, count);
  } catch (responseError: any) {
    failedCB(responseError);
    setIsLoading(false);
  }
};
export default getUserProfileData;
