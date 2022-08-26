import React from "react";
import styled from "styled-components";
import Cards from '../Cards.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faMinus } from '@fortawesome/free-solid-svg-icons';

const YourOutfit = () => {
  return (
    <Container>
      <TitleDiv>Your Outfit</TitleDiv>
      <InnerContainer>
          <CardContainer>
            <Left icon={faChevronLeft} />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Right icon={faChevronRight}/>
          </CardContainer>
        </InnerContainer>
        <SlideTracker>
          <Dash icon={faMinus} />
          <Dash2 icon={faMinus} />
          <Dash2 icon={faMinus} />
          <Dash2 icon={faMinus} />
        </SlideTracker>
      </Container>
  );
};
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
  align-items: center;
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
  width: 80%;
`
const CardContainer = styled.section`
  display: flex;
  flex-direction: row;
  background-color: #313131;
  color: lightgray;
  padding: .5em;
  align-items: center;
  overflow: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
`
const SlideTracker = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`

const Left = styled(FontAwesomeIcon)`
  font-size: 3em;
  transition: all .2s;
  position:sticky;
  color: #000000c9;
  left: 0px;
  &:hover {
    transform: scale(1.5);
  }
`

const Right = styled(FontAwesomeIcon)`
  font-size: 3em;
  transition: all .2s;
  position:sticky;
  color: #000000c9;
  right: 0px;
  &:hover {
    transform: scale(1.5);
  }
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

export default YourOutfit;