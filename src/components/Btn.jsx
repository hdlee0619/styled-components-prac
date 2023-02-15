import React from 'react';
import styled, { css } from 'styled-components';

function Btn({ children, ...props }) {
  return <BtnStyle {...props}>{children}</BtnStyle>;
}

const BtnStyle = styled.button`
  margin: 0.625rem;
  :hover {
    cursor: pointer;
  }
  :active {
    opacity: 0.7;
  }

  ${(props) =>
    props.lgBtn &&
    css`
      background-color: var(--lg-box-bgcolor);
      border: var(--lg-box-border);
      width: var(--lg-box-width);
      height: var(--lg-box-height);
      font-weight: bold;
    `}
  ${(props) =>
    props.smBtn &&
    css`
      width: var(--sm-box-width);
      height: var(--sm-box-height);
    `}
    ${(props) =>
    props.danger &&
    css`
      background-color: ${(props) => (props.dangerBg ? 'var(--lg-box-bgcolor)' : 'var(--color-danger)')};
      color: var(--color-danger-text);
      border: var(--lg-danger-box-border);
    `}
`;

export default Btn;
