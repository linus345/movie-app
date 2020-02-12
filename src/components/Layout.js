import styled from 'styled-components';

const Layout = styled.div`
  min-height: 100vh;
  max-height: 100vh;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 70px 1fr;
  grid-template-areas:
    "sidebar x"
    "sidebar main";
`;

export default Layout;
