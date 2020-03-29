import styled from 'styled-components';

const ActorGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  grid-gap: 20px;

  img {
    grid-area: 1 / 1 / span 1 / span 1;
    max-width: 100%;
    border-radius: 4px;
  }

  .info {
    grid-area: 1 / 2 / span 1 / span 1;

    h1 {
      color: ${props => props.theme.gray["900"]};
      margin: 0;
    }

    .birthplace {
      color: ${props => props.theme.gray["700"]};
      font-weight: 700;
      margin: 0 0 20px 0;
    }

    .dates {
      color: ${props => props.theme.gray["800"]};
      margin: 0 0 5px 0;

      span {
        font-weight: 500;
      }
    }

    .biography {
      margin-top: 20px;
      margin-bottom: 6px;
    }

    .text {
      margin: 0;
    }
  }

  .movies {
    grid-area: 2 / 1 / span 1 / span 2;
  }
`;

export default ActorGrid;
