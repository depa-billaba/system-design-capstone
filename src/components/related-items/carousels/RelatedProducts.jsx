import React from "react";
import styled from "styled-components";
import Cards from '../Cards.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faMinus } from '@fortawesome/free-solid-svg-icons';

const RelatedProducts = () => (
  <Container>
    <TitleDiv>Related Products</TitleDiv>
    <InnerContainer>
      <Left icon={faChevronLeft}/>
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Right icon={faChevronRight}/>
    </InnerContainer>
    <SlideTracker>
      <Dash icon={faMinus} />
      <Dash2 icon={faMinus} />
      <Dash2 icon={faMinus} />
      <Dash2 icon={faMinus} />
    </SlideTracker>
  </Container>
)

const TitleDiv = styled.section`
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: larger;
`
const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: #313131;
  color: lightgray;
  padding: .5em;
`
const InnerContainer = styled.section`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  background-color: #313131;
  color: lightgray;
  padding: .5em;
  justify-content: center;
  align-items: center;
`
const SlideTracker = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`
const Left = styled(FontAwesomeIcon)`
  font-size: 2em;
`
const Right = styled(FontAwesomeIcon)`
  font-size: 2em;
`
const Dash = styled(FontAwesomeIcon)`
  font-size: 2.5em;
  margin: 0 .1em 0 .1em;
  color: #d3d3d3f2;
`
const Dash2 = styled(FontAwesomeIcon)`
  font-size: 2.5em;
  margin: 0 .1em 0 .1em;
  color: #d3d3d386;
`


export default RelatedProducts;