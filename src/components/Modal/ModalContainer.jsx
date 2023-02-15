import React, { useState } from 'react';
import Btn from '../Btn';
import styled from 'styled-components';
import ModalBox from './ModalBox';
import ModalBox1 from './ModalBox1';
import ModalPortal from './ModalPortal';

function ModalContainer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);

  const onClickButton = () => {
    setIsOpen(true);
  };
  const onClickButton1 = () => {
    setIsOpen1(true);
  };
  return (
    <>
      <ModalPortal>
        <h2>Modal</h2>
        <ModalWrapper>
          <Btn onClick={onClickButton} smBtn>
            open modal
          </Btn>
          <Btn onClick={onClickButton1} lgBtn danger dangerBg>
            open modal
          </Btn>
          {isOpen && (
            <ModalBox isOpen={isOpen} onClose={() => setIsOpen(false)}>
              닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.{' '}
            </ModalBox>
          )}
          {isOpen1 && (
            <ModalBox1 isOpen={isOpen1} onClose={() => setIsOpen1(false)}>
              닫기 버튼 1개가 있고, 외부 영역을 누르면 모달이 닫혀요.
            </ModalBox1>
          )}
        </ModalWrapper>
      </ModalPortal>
    </>
  );
}

const ModalWrapper = styled.div`
  display: flex;
`;

export default ModalContainer;
