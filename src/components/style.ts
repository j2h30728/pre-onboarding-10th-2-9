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
`;

export const Input = styled.input`
  width: 350px;
  height: 30px;
  padding: 5px;
`;
export const Button = styled.button`
  width: 40px;
  height: 40px;
`;
export const SearchedList = styled.ul`
  width: 100%;
  justify-content: start;
`;
export const SeachedData = styled.li`
  list-style: none;
  margin-bottom: 10px;
`;
