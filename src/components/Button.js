import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled(Link)`
  background-color: ${props => props.theme.gray['300']};
  color: ${props => props.theme.gray['900']};
  width: auto;
  padding: 10px 22px;
  margin: 20px 0;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.gray['500']};
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  outline: none;
  transition: 0.2s;

  &:hover {
    background-color: ${props => props.theme.gray['400']};
  }

  > * {
    display: inline-block;
    margin: 0;
  }
`;

export const ButtonInGroup = styled(Button)`
  margin: 0;
  padding: 10px 10px;
  border-radius: 0;
`;

export default Button;
