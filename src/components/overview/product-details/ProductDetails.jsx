import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AddToCart from './AddToCart';
import ProductInformation from './ProductInformation';
import StyleSelector from './StyleSelector';
import InfoList from './InfoList';

const ProductDetails = ({ product, styles, style, setStyle }) => {
  return (
    <Container>
      <ProductInformation product={product} style={style} />
      <StyleSelector styles={styles} style={style} setStyle={setStyle} />
      <AddToCart style={style}/>
      <InfoList />
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #313131;
  color: lightgray;
  padding: 0.5em;
  border: none;
  flex-basis: 30%;
`;

export default ProductDetails;
