import React from 'react';
import styled from 'styled-components';
import Btn from './Btn';

const BtnWrapper = styled.div`
  display: flex;
`;

function ButtonContainer() {
  return (
    <div>
      <h2>Button</h2>
      <BtnWrapper>
        <Btn lgBtn>Large Primary Button</Btn>
        <Btn>Medium</Btn>
        <Btn smBtn>Small</Btn>
      </BtnWrapper>
      <BtnWrapper>
        <Btn lgBtn danger dangerBg>
          Large Primary Button
        </Btn>
        <Btn danger>Medium</Btn>
        <Btn smBtn danger>
          Small
        </Btn>
      </BtnWrapper>
    </div>
  );
}

export default ButtonContainer;
