import React from 'react';
import styled from 'styled-components';

const ModalWrap = ({ children }) => {
  return (
    <ModalOverlay>
      <ModalWrapper>{children}</ModalWrapper>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
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

export default ModalWrap;
