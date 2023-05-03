import { useEffect, useState } from 'react';

import getSearchedData from './api';
import { SearchedData } from './@types';
import { useDebounce, useInput } from './hooks';

import * as S from './components/style';

const App = () => {
  const { value: keyword, onChange, clear } = useInput('');
  const [searchedList, setSearchedList] = useState<Array<SearchedData>>();
  const [error, setError] = useState<string>();
  const debouncedValue = useDebounce(keyword, 500);

  const searching = async () => {
    const res = await getSearchedData(debouncedValue);
    if (res.isSuccess && res.data) {
      setError('');
      setSearchedList(res.data);
    }
    if (!res.isSuccess) {
      setError(res.message);
    }
  };

  useEffect(() => {
    searching();
  }, [debouncedValue]);

  return (
    <S.Container>
      <S.Title>
        국내 모든 임상시험 검색하고 <br /> 온라인으로 참여하기
      </S.Title>
      <S.SearchWrapper>
        <S.Input onChange={onChange} value={keyword} />
        <S.Button onClick={clear}>X</S.Button>
        <S.Button>검색</S.Button>
      </S.SearchWrapper>
      <S.SearchedList>
        {searchedList
          ? searchedList?.map((searched) => (
              <S.SeachedData key={searched.id}>{searched.name}</S.SeachedData>
            ))
          : null}
        {error && <S.SeachedData>{error}</S.SeachedData>}
      </S.SearchedList>
    </S.Container>
  );
};

export default App;
