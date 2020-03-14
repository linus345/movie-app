import styled from 'styled-components';

const Overlay = styled.div`
  z-index: 1;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0);
  visibility: hidden;
  transition: 0.2s;

  @media ${props => props.theme.breakpoints.tablet} {
    visibility: ${props => props.isMenuOpen ? "visible" : "hidden"};
    background-color: ${props => props.isMenuOpen && "rgba(0, 0, 0, 0.9)"};
  }
`;

export default Overlay;
