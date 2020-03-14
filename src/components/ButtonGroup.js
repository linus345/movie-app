import styled from 'styled-components';

const ButtonGroup = styled.div`
  display: flex;
  align-self: flex-end;
  background-color: ${props => props.theme.gray['300']};
  color: ${props => props.theme.gray['900']};
  margin-top: 30px;
  border-radius: 6px;
  border: 1px solid ${props => props.theme.gray['500']};

  > * {
    display: inline-block;
    min-width: 56px;
  }

  >:first-child {
    border-radius: 5px 0 0 5px;
  }

  >:last-child {
    border-radius: 0 5px 5px 0;
  }
`;

export default ButtonGroup;
