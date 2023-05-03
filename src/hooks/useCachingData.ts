import { CacheData, SearchedData } from '../@types';
import getSearchedData from '../api';
import { EXPIRE_TIME } from '../utils/constant';
import useCheckExpriesAt from './useCheckExpriesAt';

let cacheData: CacheData = {};
const useCahingData = async (key: string): Promise<Array<SearchedData>> => {
  if (Object.keys(cacheData).length > 1) {
    const checkedCacheData = useCheckExpriesAt(cacheData);
    cacheData = checkedCacheData;
    if (checkedCacheData[key] && checkedCacheData[key].expiresAt > Date.now()) {
      return checkedCacheData[key].data;
    }
  }
  const res = await getSearchedData(key);
  if (res.isSuccess) {
    cacheData[key] = {
      data: res.data,
      expiresAt: EXPIRE_TIME,
    };
    return cacheData[key].data;
  }
  return [];
};
export default useCahingData;
