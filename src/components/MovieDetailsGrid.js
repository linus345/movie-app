import styled from 'styled-components';

const MovieDetailsGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: minmax(min-content, max-content) auto 2fr;
  width: 100%;
  max-width: 100%;
`;

export default MovieDetailsGrid;
