import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlash } from '@fortawesome/free-solid-svg-icons';
import QuantSelect from './QuantSelect';
import CartButton from './CartButton';
const AddToCart = ({ style }) => {
  const skus = style.skus;
  const sizes = [];
  const [sku, setSku] = useState(null);
  const [maxQuant, setMaxQuant] = useState(0);
  const [quant, setQuant] = useState(0);

  const quantRef = useRef(null);

  useEffect(() => {
    setSku(null);
    setMaxQuant(0);
    setQuant(0);
  }, [style]);

  useEffect(() => {
    let maxQuant = 0;
    if(skus[sku]) {
      maxQuant = skus[sku].quantity;
      setMaxQuant(maxQuant);
    }
    setQuant(maxQuant ? 1 : 0);
  }, [sku]);

  const handleQuant = (quant) => {
    setQuant(parseInt(quant));
  }
  const handleCart = () => {
    console.log(`Adding SKU: ${sku} to cart quant: ${quant} `);
  }
  const openQuantSelect = () => {
    quantRef.current.focus();
  }

  for (let key in skus) {
    sizes.push(
      <SizeOption
        key={key}
        onClick={() => setSku(key)}
        selected={sku === key ? true : false}
      >
        {skus[key].size}
      </SizeOption>
    );
  }

  return (
    <div>
      <SizeAndQuant>
        <SizeContainer>{sizes}</SizeContainer>
        <QuantSelect quant={quant} setQuant={handleQuant} maxQuant={maxQuant} sku={sku} quantRef={quantRef}/>
      </SizeAndQuant>
      <div>
        <CartButton quant={quant} handleCart={handleCart} sku={sku} openQuantSelect={openQuantSelect}/>
        <Button>☆</Button>
      </div>
    </div>
  );
};

const Button = styled.button`
  border-radius: 0;
  border: 1px solid ${props => props.theme.color};
  background-color: ${props => props.theme.shadow};
  color: ${props => props.theme.color};
  font-size: 14px;
  padding: 10px;
  margin-right: 10px;
  margin-top: 5px;
`;

const SizeOption = styled.button`
  font-size: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1;
  width: 3em;
  border-radius: 0;
  border: 1px solid ${props => props.theme.color};
  color: ${props => props.theme.color};
  font-size: 14px;
  padding: 10px;
  user-select: none;
  cursor: pointer;
  &:hover {
    filter: brightness(120%);
  }
  background-color: ${(props) => (props.selected ? 'red' : props.theme.shadow)};
`;
const SizeContainer = styled.div`
  gap: 1em;
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;
const Slash = styled.img`
  position: absolute;
  aspect-ratio: 1;
  color: white;
  width: 5em;
`;
const SizeAndQuant = styled.div`
  margin-top: 1em;
  display: flex;
`;

export default AddToCart;
