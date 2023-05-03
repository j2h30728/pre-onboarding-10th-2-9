import styled from 'styled-components';

export const Container = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

export const Title = styled.h1`
  text-align: center;
`;
export const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 2px;
  background-color: rgb(208, 232, 253);
  border-radius: 50px;
`;

export const Input = styled.input`
  width: 350px;
  padding: 10px 0;
  margin: 10px 30px;
  border: none;
  background-color: transparent;
  font-size: 18px;
  font-weight: 600;
  &:focus {
    outline: none;
    border-bottom: 4px solid rgb(52, 121, 225);
  }
`;
export const ClearButton = styled.button`
  width: 60px;
  height: 45px;
  background-color: transparent;
  color: gray;
  border: none;
  border-radius: 50px;
  cursor: pointer;
`;
export const SearchingButton = styled.button`
  width: 60px;
  height: 45px;
  background-color: rgb(52, 121, 225);
  color: white;
  border: none;
  margin-right: 10px;
  border-radius: 50px;
  cursor: pointer;
  fill: white;
`;
export const SearchedList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-top: 20px;
  background-color: rgb(208, 232, 253);
  border-radius: 10px;
  gap: 10px;
`;
export const SeachedData = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 20px;
  padding: 10px;
  border-radius: 30px;
  &:last-of-type {
    margin-bottom: 20px;
  }
  &:first-of-type {
    margin-top: 20px;
  }
  font-weight: 500;

  &:focus {
    outline: none;
    background-color: rgb(52, 121, 225);
    color: white;
    svg {
      fill: white;
    }
  }
`;
export const SubTitle = styled.p`
  margin: 20px 0 0 20px;
  font-size: 13px;
  color: gray;
`;
