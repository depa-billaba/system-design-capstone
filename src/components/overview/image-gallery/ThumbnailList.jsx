import React, { useRef } from "react";
import styled from "styled-components";

const ThumbnailList = ({ photos, setIndex, index, scrollPos }) => {
  const icons = photos.map((photo, i) => {
    return (
      <Icon
        src={photo.thumbnail_url}
        value={i}
        key={i}
        onClick={() => setIndex(i)}
        selected={index === i ? true : false}
      />
    );
  });

  return (
    <Ul ref={scrollPos}>
      {icons}
      <ExtraSpace />
    </Ul>
  );
};

const Ul = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 25px;
  left: 15px;
  height: 88%;
  overflow-y: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  cursor: pointer;
`;
const Icon = styled.img`
  height: 60px;
  width: 60px;
  aspect-ratio: 1;
  object-fit: cover;
  border: none;
  background: gray;
  margin-right: 4px;
  margin-top: 5px;
  margin-left: 2px;
  scroll-snap-align: start;
  outline: ${props => props.selected ? "2px solid white" : "none"};
`;
const ExtraSpace = styled.div`
  width: 10px;
  flex: 1 0 1000px;
`;

export default ThumbnailList;
