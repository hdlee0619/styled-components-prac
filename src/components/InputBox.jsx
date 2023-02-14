import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  margin: 0 1.0625rem 0 0.625rem;
`;

function InputBox({ children, ...props }) {
  return (
    <>
      <h3>{children}</h3>
      <Input {...props}></Input>
    </>
  );
}

export default InputBox;
