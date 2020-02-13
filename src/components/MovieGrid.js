import styled from 'styled-components';

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 15px 8px;
`;

export default MovieGrid;
