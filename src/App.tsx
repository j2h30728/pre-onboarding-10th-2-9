import { useEffect, useState } from 'react';

import { SearchedData } from './@types';
import { useCahingData, useDebounce, useInput } from './hooks';

import * as S from './components/style';

const App = () => {
  const { value: keyword, onChange, clear } = useInput('');
  const [searchedList, setSearchedList] = useState<Array<SearchedData>>();
  const debouncedValue = useDebounce(keyword, 500);

  const searching = async () => {
    const seachedData = await useCahingData(debouncedValue);
    if (seachedData) {
      setSearchedList(seachedData);
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
        {searchedList &&
          searchedList?.map((searched) => (
            <S.SeachedData key={searched.id}>{searched.name}</S.SeachedData>
          ))}
        {debouncedValue && searchedList?.length === 0 && <S.SeachedData>검색어 없음</S.SeachedData>}
      </S.SearchedList>
    </S.Container>
  );
};

export default App;
