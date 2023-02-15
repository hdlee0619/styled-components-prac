import React from 'react';
import Btn from '../Btn';
import styled from 'styled-components';

const ModalBg = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0px;
  width: 100%;
  height: 100vh;
`;

const ModalWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 31.25rem;
  height: 19rem;
  padding: 1.25rem;
  border: 1px solid black;
  border-radius: 1.25rem;
  background-color: white;
`;

const ModalText = styled.p`
  margin-top: 0.9375rem;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

function ModalBox({ children, onClose }) {
  const CloseHandler = () => {
    onClose?.();
  };
  return (
    <ModalBg isOpen>
      <ModalWrapper>
        <Modal>
          <ModalText>{children}</ModalText>
          <BtnWrapper>
            <Btn onClick={CloseHandler} smBtn danger>
              닫기
            </Btn>
            <Btn smBtn>확인</Btn>
          </BtnWrapper>
        </Modal>
      </ModalWrapper>
    </ModalBg>
  );
}

export default ModalBox;
