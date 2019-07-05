import React from 'react'
import styled from 'styled-components';
import FormatDate from './FormatDate'

const BodyContainer = styled.div`
`;

const Body = () => {
  return <BodyContainer>
    {FormatDate()}
  </BodyContainer>
}

export default Body;