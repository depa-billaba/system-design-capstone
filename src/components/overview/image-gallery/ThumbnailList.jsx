import React from 'react';
import styled from 'styled-components';

const ThumbnailList = ({ photos }) => {

  const icons = photos.map((photo) => {
    return <Icon src={photo.thumbnail_url}/>
  })
  console.log(icons);

  return (
    <Ul>
      {icons}
    </Ul>
  );
};
const Ul = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 10px;
  left: 10px;
`;
const Icon = styled.img`
  height: 80px;
  width: 80px;
  border: 1px solid red;
  background: gray;
  margin-right: 4px;
  margin-top: 5px;
`;

export default ThumbnailList;
