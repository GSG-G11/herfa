import { request, Works, WorksProps } from '../utils';

const getWorksData = async (
  {
    setWorkLoading,
    successCB,
    failedCB,
    id,
    page,
  } : WorksProps,
) => {
  try {
    setWorkLoading(true);
    const { data } : { data : Works[] } = await request('get', `/work/${id}?page=${page}`);
    successCB(data);
    setWorkLoading(false);
  } catch (responseError: any) {
    failedCB(responseError.data.msg);
    setWorkLoading(false);
  }
};
export default getWorksData;
