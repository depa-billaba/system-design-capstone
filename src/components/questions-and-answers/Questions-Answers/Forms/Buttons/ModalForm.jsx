import React from "react";
import styled from "styled-components";

const Modal = ({
  isOpen,
  onClick,
  showCloseButton = true,
  children,
  title,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalDiv onClick={onClick}>
      <ModalContentDiv onClick={(e) => e.stopPropagation()}>
        <ModalHeaderDiv>
          <ModalTitleH4>{title}</ModalTitleH4>
        </ModalHeaderDiv>
        <ModalBodyDiv>{children}</ModalBodyDiv>
        {showCloseButton ? (
          <ModalFooterDiv>
            <Button onClick={onClick}>Close</Button>
          </ModalFooterDiv>
        ) : null}
      </ModalContentDiv>
    </ModalDiv>
  );
};

const ModalDiv = styled.div`
position: fixed;
left: 0;
top: 0;
right: 0;
bottom 0;
background-color: rgba(0,0,0,0.75);
display: flex;
align-items: center;
justify-content: center;

`;

const ModalContentDiv = styled.div`
  width: 500px;
  background-color: #fff;
`;

const ModalHeaderDiv = styled.div`
  padding: 10px;
`;

const ModalTitleH4 = styled.h4`
  margin: 0;
`;

const ModalBodyDiv = styled.div`
padding: 10px;
border-top: 1px solid #eee;
border-bottom 1px solid #eee;
`;

const ModalFooterDiv = styled.div``;

const Button = styled.button``;

export default Modal;