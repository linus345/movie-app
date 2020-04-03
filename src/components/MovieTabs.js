import React, { useState } from 'react';
import styled from 'styled-components';

import MovieDetailsTab from './MovieDetailsTab';
import MovieCastTab from './MovieCastTab';
import MoviePhotosTab from './MoviePhotosTab';
import MovieSimilarTab from './MovieSimilarTab';

const MovieTabs = ({ movie, mainEl, isMobile }) => {
  const tabs = {
    "Details": MovieDetailsTab,
    "Cast": MovieCastTab,
    "Photos": MoviePhotosTab,
    "Similar": MovieSimilarTab,
  };
  const [activeTab, setActiveTab] = useState("Details");
  const Component = tabs[activeTab];

  return(
    <StyledMovieTabs>
      <div className="tabs">
        {Object.keys(tabs).map(tab => (
          <h3
            className={activeTab === tab ? "tab-link active" : "tab-link"}
            key={tab}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </h3>
        ))}
      </div>
      <Component movie={movie} mainEl={mainEl} isMobile={isMobile} />
    </StyledMovieTabs>
  );
}

const StyledMovieTabs = styled.div`
  grid-area: 3 / span 1;

  .tabs {
    display: flex;
    flex-wrap: wrap;
    background-color: black;
    border: 2px solid black;
    border-top: 2px solid rgba(255, 255, 255, 0.2);
    border-bottom: none;

    .tab-link {
      margin: 0;
      color: gray;
      padding: 10px 14px;
      border-top: 3px solid rgba(0, 0, 0, 0);
      cursor: pointer;

      &:hover {
        color: lightgray;
        border-top-color: ${props => props.theme.blue["800"]};
      }

      &.active {
        color: black;
        background-color: white;
        border-top-color: ${props => props.theme.blue["500"]};
      }
    }
  }
`;

export default MovieTabs;
