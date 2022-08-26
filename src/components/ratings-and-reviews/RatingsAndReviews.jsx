import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import ReviewBreakdown from './ReviewBreakdown.jsx'
import ReviewList from './ReviewList.jsx'

//sample data:
import sampleProduct from "./sample.js"

const RatingsAndReviews = () => {

  const [ products ] = useState(sampleProduct);

  return (
    <AppContainer>
      <h2>RATINGS AND REVIEWS</h2>
      <Container>
        <ReviewBreakdown />
        <ReviewList products={products}/>
      </Container>
    </AppContainer>
  )
}

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 0.5em;
`
const AppContainer = styled(Container)`
  flex-direction: column;
`

export default RatingsAndReviews;