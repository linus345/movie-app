import styled from 'styled-components';

const Layout = styled.div`
  min-height: 100vh;
  max-height: 100vh;
  display: grid;
  grid-template-columns: 205px 1fr;
  grid-template-rows: 70px 1fr;
  grid-template-areas:
    "sidebar main"
    "sidebar main";

  @media ${props => props.theme.breakpoints.tablet} {
    grid-template-columns: 1fr;
    grid-template-rows: 70px 1fr;
    grid-template-areas:
      "header"
      "main";
  }
`;

export default Layout;
