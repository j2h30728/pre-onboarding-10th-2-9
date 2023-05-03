import * as S from './style';

interface SeachInputProps {
  inputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
  inpuClear: () => void;
}

const SeachInput = ({ inputChange, inputValue, inpuClear }: SeachInputProps) => {
  return (
    <S.SearchWrapper>
      <S.Input onChange={inputChange} value={inputValue} />
      <S.Button onClick={inpuClear}>X</S.Button>
      <S.Button>검색</S.Button>
    </S.SearchWrapper>
  );
};
export default SeachInput;
