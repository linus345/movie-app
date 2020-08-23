import styled from 'styled-components';

const CustomError = styled.div`
  grid-column: 1 / -1;
  background-color: red;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: 700;

  & > * {
    margin: 0;
  }
`;

export default CustomError;
