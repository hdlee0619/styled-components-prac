import React from 'react';
import styled from 'styled-components';

function InputBox({ children, ...props }) {
  return (
    <>
      <h3>{children}</h3>
      <Input {...props}></Input>
    </>
  );
}

const Input = styled.input`
  margin: 0 1.0625rem 0 0.625rem;
  width: 13.75rem;
  height: 2.5rem;
  border: 0.0625rem solid black;
  border-radius: 0.625rem;
`;

export default InputBox;
