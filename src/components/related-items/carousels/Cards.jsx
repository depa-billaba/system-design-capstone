import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Modal from "./Modal.jsx";
import api from '../../shared-components/api';

const Cards = ({ product, setProductId }) => {

  const [price, setPrice] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [name, setName] = useState(null);
  const [category, setCategory] = useState(null);
  const [modalState, setModalState] = useState(false);
  const [posStateTop, setPosStateTop] = useState(0);
  const [posStateLeft, setPosStateLeft] = useState(0);
  const handleMouseEnter = (boolean, e) => {
    setModalState(boolean);
    setPosStateLeft(e.clientX);
    setPosStateTop(e.clientY);
  }
  useEffect(() => {
    api.get(`products/${product}`)
    .then(res => {
      setName(res.data.name);
      setCategory(res.data.category);
    })
    .catch(err => console.error(err))
  }, [product]);

  useEffect(() => {
    api.get(`products/${product}/styles`)
    .then(res => {
      setPrice(res.data.results[0]['original_price']);
      setPhoto(res.data.results[0].photos[0]['thumbnail_url']);
    })
    .catch(err => console.error(err))
  }, [product]);




  return (
    <StyledContainer onMouseLeave={() => {setModalState(false)}} onClick={() => {setProductId(product)}}>
      <ImageContainer>
        <img src={photo} style={{
          maxWidth: 'auto',
          height: '100%'
        }}></img>
      </ImageContainer>
      <InfoContainer onMouseEnter={(event) => {handleMouseEnter(true, event)}} >
        <div>{name}</div>
        <div>{category}</div>
        <div>${price}</div>
        <div>★★★☆☆</div>
      </InfoContainer>
      <Modal modalState={modalState} posTop={posStateTop} posLeft={posStateLeft} />
    </StyledContainer>
  );
};






const Container = styled.div``;
const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: #4f5d2a;
  color: light;
  padding: 0 0 .5em 0;
  margin: 0 .3em 0 .3em;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  overflow: hidden;
  max-width: 16em;
  min-width: 16em;
  scroll-snap-align: start;
`

const ImageContainer = styled.section`
  display: flex;
  max-height: 12em;
  min-height: 12em;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100%;
`
const InfoContainer = styled.section`
  display: flex;
  height: auto;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`


export default Cards;

