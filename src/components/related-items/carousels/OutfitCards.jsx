import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Modal from "./Modal.jsx";
import api from '../../shared-components/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faMinus, faPlus, faStar, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const OutfitCards = ({ product, setProductId, currProductInfo, outfit, setOutfit }) => {

  const [price, setPrice] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [name, setName] = useState(null);
  const [category, setCategory] = useState(null);
  const [modalState, setModalState] = useState(false);


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

  const removeProduct = (index) => {
    setOutfit([
      ...outfit.slice(0, index),
      ...outfit.slice(index + 1, outfit.length)
    ]);
  }

  const xClickHandler = () => {
    let currIndex;
    outfit.forEach((item, i) => {
      if (item === product) {
        currIndex = i;
      }
    })
    removeProduct(currIndex);
  }



  return (
    <StyledContainer>
      <ImageContainer>
        <img onClick={() => {setProductId(product)}} src={photo} style={{
          maxWidth: 'auto',
          height: '100%'
        }}></img>
        <XButton icon={faCircleXmark} onClick={() => {xClickHandler()}} />
      </ImageContainer>
      <InfoContainer onClick={() => {setProductId(product)}} >
        <div>{name}</div>
        <div>{category}</div>
        <div>${price}</div>
        <div>★★★☆☆</div>
      </InfoContainer>
      <Modal modalState={modalState} price={price} name={name} photo={photo} category={category} currProductInfo={currProductInfo} />
    </StyledContainer>
  );
};






const Container = styled.div``;
const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: ${props => props.theme.shadow};
  color: ${props => props.theme.color};
  padding: 0 0 .5em 0;
  margin: 0 .6em 0 0;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  overflow: hidden;
  max-width: 16em;
  min-width: 16em;
  scroll-snap-align: start;
  border: 2px solid ${props => props.theme.color};
  cursor: pointer;
  position: relative;
`
const XButton = styled(FontAwesomeIcon)`
  font-size: 1.2em;
  color: ${props => props.theme.shadow};
  z-index: 2;
  position: absolute;
  right: 0;
  top: 0;
  margin: 0.2em 0.2em 0 0;
  transition: all .2s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
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


export default OutfitCards;