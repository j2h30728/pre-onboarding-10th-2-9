import { APIResponse } from '../@types';
import BASE_URL from './BASE_URL';

const getSearchedData = async (keyword: string): Promise<APIResponse> => {
  try {
    if (keyword) {
      const res = await fetch(`${BASE_URL}/?name=${keyword}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      return {
        isSuccess: true,
        data,
      };
    }
    return {
      isSuccess: false,
      message: '검색어 없음',
    };
  } catch (error) {
    return {
      isSuccess: false,
      message: 'API 오류입니다.',
    };
  }
};

export default getSearchedData;
