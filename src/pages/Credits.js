import React from 'react';
import styled from 'styled-components';

import tmdbLogo from '../images/tmdb-logo.svg';

const Credits = () => (
  <StyledCredits className="credits">
    <h1>Credits</h1>
    <img src={tmdbLogo} alt="TMDb Logo" />
    <p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
  </StyledCredits>
);

const StyledCredits = styled.div`
  h1 {
    color: ${props => props.theme.gray['900']};
  }

  img {
    width: 100%;
    max-width: 150px;
  }
`;

export default Credits;
