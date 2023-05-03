import { RefObject } from 'react';
import * as S from './style';
import Svg from './Svg';

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
      <S.ClearButton onClick={inpuClear}>X</S.ClearButton>
      <S.SearchingButton>
        <Svg />
      </S.SearchingButton>
    </S.SearchWrapper>
  );
};
export default SeachInput;
