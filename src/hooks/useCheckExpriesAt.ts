import { CacheData } from '../@types';

const useCheckExpriesAt = (cacheData: CacheData): CacheData => {
  const keyArr = Object.keys(cacheData);
  const expiresArr = Object.values(cacheData).filter((x) => x.expiresAt < Date.now());

  if (expiresArr) {
    const newCacheData = { ...cacheData };
    keyArr.forEach((key) => {
      if (expiresArr.find((x) => x.expiresAt === cacheData[key].expiresAt)) {
        delete newCacheData[key];
      }
    });
    return newCacheData;
  }
  return cacheData;
};

export default useCheckExpriesAt;
