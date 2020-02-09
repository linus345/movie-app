import React from 'react';
import styled from 'styled-components';

const Sidebar = () => {
  return (
    <StyledSidebar>
      <p>Sidebar</p>
    </StyledSidebar>
  );
}

const StyledSidebar = styled.aside`
  color: red;
`;

export default Sidebar;
