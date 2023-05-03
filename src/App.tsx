import { useEffect, useRef, useState } from 'react';

import { SearchedData } from './@types';
import { useCahingData, useDebounce, useInput } from './hooks';

import * as S from './components/style';
import SeachInput from './components/SeachInput';
import Svg from './components/Svg';
import { ARROWDON_CODE, ARROWUP_CODE } from './utils/constant';

const App = () => {
  const { value: keyword, onChange, clear } = useInput('');
  const [searchedList, setSearchedList] = useState<Array<SearchedData>>();
  const debouncedValue = useDebounce(keyword, 500);
  const inputRef = useRef<HTMLInputElement>(null);
  const searchedDataRef = useRef<(HTMLDivElement | null)[]>([]);
  const filteredSearchDataRef = { current: searchedDataRef.current?.filter((x) => x !== null) };

  const searching = async () => {
    const seachedData = await useCahingData(debouncedValue);
    if (seachedData) {
      setSearchedList(seachedData);
    }
  };

  useEffect(() => {
    searching();
  }, [debouncedValue]);

  const handleDataKeyDown = (event: React.KeyboardEvent, idx: number) => {
    if (event.code === ARROWDON_CODE) {
      filteredSearchDataRef.current[idx + 1]?.focus();
    }
    if (event.code === ARROWUP_CODE) {
      if (idx === 0) {
        inputRef.current?.focus();
      }
      filteredSearchDataRef.current[idx - 1]?.focus();
    }
  };
  const handleInputKeyDown = (event: React.KeyboardEvent) => {
    if (event.code === ARROWDON_CODE && event.nativeEvent.isComposing === false) {
      event.preventDefault();
      filteredSearchDataRef.current[0]?.focus();
    }
  };

  return (
    <S.Container>
      <S.Title>
        국내 모든 임상시험 검색하고 <br /> 온라인으로 참여하기
      </S.Title>
      <SeachInput
        inputRef={inputRef}
        handleInputKeyDown={handleInputKeyDown}
        inputChange={onChange}
        inputValue={keyword}
        inpuClear={clear}
      />
      {debouncedValue && searchedList && (
        <S.SearchedList>
          <S.SubTitle>추천 검색어</S.SubTitle>
          {searchedList.length === 0 && <S.SeachedData>검색어 없음</S.SeachedData>}
          {searchedList.map((data, idx) => (
            <S.SeachedData
              key={data.id}
              ref={(el) => {
                filteredSearchDataRef.current[idx] = el;
              }}
              tabIndex={idx}
              onKeyDown={(e) => handleDataKeyDown(e, idx)}
            >
              <Svg />
              {data.name}
            </S.SeachedData>
          ))}
        </S.SearchedList>
      )}
    </S.Container>
  );
};

export default App;
