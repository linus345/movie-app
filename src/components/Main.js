import styled from 'styled-components';

const Main = styled.main`
  grid-area: main;
  display: flex;
  flex-direction: column;
  padding: 70px 60px;
  overflow-y: scroll;

  @media ${props => props.theme.breakpoints.tablet} {
    padding: 50px 30px;
  }
`;

export default Main;
