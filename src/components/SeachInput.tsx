import { RefObject } from 'react';
import * as S from './style';

interface SeachInputProps {
  inputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
  inpuClear: () => void;
  handleInputKeyDown: (event: React.KeyboardEvent) => void;
  inputRef: RefObject<HTMLInputElement>;
}

const SeachInput = ({
  inputChange,
  inputValue,
  inpuClear,
  handleInputKeyDown,
  inputRef,
}: SeachInputProps) => {
  return (
    <S.SearchWrapper>
      <S.Input
        ref={inputRef}
        onKeyDown={handleInputKeyDown}
        onChange={inputChange}
        value={inputValue}
      />
      <S.Button onClick={inpuClear}>X</S.Button>
      <S.Button>검색</S.Button>
    </S.SearchWrapper>
  );
};
export default SeachInput;
