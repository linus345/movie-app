import styled from 'styled-components';

const MovieDetailsGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: minmax(min-content, max-content) auto 2fr;
  width: 100%;
  max-width: 100%;

  .movie-poster {
    position: absolute;
    grid-row: 1 / span 2;
    width: 100%;
    height: 100%;
    background-image: url("${props => props.img}");
    background-size: cover;
    background-position: center;
  }
`;

export default MovieDetailsGrid;
