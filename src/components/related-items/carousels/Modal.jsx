import React from "react";
import styled from "styled-components";

const Modal = ({ modalState, leftPos, topPos }) => {
  const leftTracker = () => {
    console.log('lefty :', leftPos, 'toppy :', topPos);
  }
  if (!modalState) {
    return null;
  } else {
    return (
      <Container left={leftPos} top={topPos} onMouseEnter={() => {leftTracker()}}>
        <ImagesContainer>
          <ImageContainer>
            <img src="https://images.unsplash.com/photo-1562542082-519ebcdb43e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"></img>
          </ImageContainer>
          <ImageContainer>
            <img src="https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"></img>
          </ImageContainer>
        </ImagesContainer>
      </Container>
    );
  }
  // style={{transform: `translate(${positionRefLeft}px, ${positionRefTop}px)`}}
};

const Container = styled.section`
  position: absolute;
  top: ${props => `${props.top}`};
  left: ${props => `${props.left}`};
  z-index: 1;
  /* transform: translate(-50%, -50%); */
`
const ImageContainer = styled.section`
  display: flex;
  overflow: auto;
  max-width: 10em;
  height: 10em;
  overflow: hidden;
`
const ImagesContainer = styled.section`
  display: flex;
  flex-direction: row;
  border-radius: 2%;
  overflow:auto;
  /* flex-grow: 1;
  overflow: hidden;
  margin: 0;
  padding: 0; */
`
export default Modal;