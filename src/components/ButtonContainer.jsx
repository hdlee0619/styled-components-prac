import React from 'react';
import styled from 'styled-components';
import Btn from './Btn';

const BtnWrapper = styled.div`
  display: flex;
`;

function ButtonContainer() {
  const promptHandler = () => {
    const answer = prompt('어렵나요?');
    console.log(answer);
  };
  return (
    <div>
      <h2>Button</h2>
      <BtnWrapper>
        <Btn onClick={() => alert('버튼을 만들어보세요')} lgBtn>
          Large Primary Button
        </Btn>
        <Btn>Medium</Btn>
        <Btn smBtn>Small</Btn>
      </BtnWrapper>
      <BtnWrapper>
        <Btn onClick={promptHandler} lgBtn danger dangerBg>
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
