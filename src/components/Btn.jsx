import React from 'react';
import styled, { css } from 'styled-components';
import theme from '../style/Theme';

function Btn({ children, ...props }) {
  return <BtnStyle {...props}>{children}</BtnStyle>;
}

const BtnStyle = styled.button`
  margin: 0.625rem;
  cursor: pointer;
  width: 8.125rem;
  height: 2.8125rem;
  border-radius: 0.6875rem;
  border: none;
  background-color: ${theme.successColor};
  font-size: 1rem;
  :active {
    opacity: 0.7;
  }
  ${(props) =>
    props.lgBtn &&
    css`
      background-color: ${theme.largeBgColor};
      border: 0.1875rem solid ${theme.successColor};
      width: 12.5rem;
      height: 3.125rem;
      font-weight: bold;
    `}
  ${(props) =>
    props.smBtn &&
    css`
      width: 6.25rem;
      height: 2.625rem;
    `}
    ${(props) =>
    props.danger &&
    css`
      background-color: ${(props) => (props.dangerBg ? theme.largeBgColor : theme.dangerColor)};
      color: ${theme.dangerColorText};
      border: 0.1875rem solid #fab1a0;
    `}
`;

export default Btn;
