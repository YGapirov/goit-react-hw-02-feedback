import styled from 'styled-components';

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 20px;
`;

export const Button = styled.button`
  width: 100px;
  font-size: 20px;
  padding: 5px;
  border-radius: 10px;
  border: none;
  background-color: whitesmoke;
  box-shadow: 0 1px 7px grey;

  &:hover,
  &:focus {
    color: white;
    background-color: black;
    cursor: pointer;
  }
`;
