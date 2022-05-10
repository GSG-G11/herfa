import { SearchResponse, request } from '../utils';

const getSearchResults = async (
  queryString: string,
  successCB: any,
  failedCB: any,
  setLoadingCB: any,
) => {
  try {
    setLoadingCB();
    const searchResult : SearchResponse = await request('get', `/provider?${queryString}`);
    successCB(searchResult);
  } catch (responseError: any) {
    failedCB(responseError);
  }
};
export default getSearchResults;
