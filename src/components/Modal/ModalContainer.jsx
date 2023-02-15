import React, { useState } from 'react';
import Btn from '../Btn';
import styled from 'styled-components';
import ModalBox from './ModalBox';

const ModalWrapper = styled.div`
  display: flex;
`;

function ModalContainer() {
  const [isOpen, setIsOpen] = useState(false);

  const onClickButton = () => {
    setIsOpen(true);
  };
  return (
    <>
      <h2>Modal</h2>
      <ModalWrapper>
        <Btn onClick={onClickButton} smBtn>
          open modal
        </Btn>
        <Btn lgBtn danger dangerBg>
          open modal
        </Btn>
        {isOpen && (
          <ModalBox isOpen={isOpen} onClose={() => setIsOpen(false)}>
            닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.{' '}
          </ModalBox>
        )}
        {/*         <ModalBox>닫기 버튼 1개가 있고, 외부 영역을 누르면 모달이 닫혀요.</ModalBox> */}
      </ModalWrapper>
    </>
  );
}

export default ModalContainer;
