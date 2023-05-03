interface APIError {
  isSuccess: false;
  message: string;
}
export interface SearchedData {
  id: number;
  name: string;
}

interface APISuccess {
  isSuccess: true;
  data: Array<SearchedData>;
}
export type APIResponse = APIError | APISuccess;

export interface CacheData {
  [key: string]: {
    data: Array<SearchedData>;
    expiresAt: number;
  };
}
