import React from 'react'
import styled from 'styled-components';

const FooterContainer = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  min-height: 10vh;
  background-color: red;
  color: white;
  align-items: center;
  justify-content: center;
`;

const currentYear = new Date().getFullYear()

const Footer = () => {
  return <FooterContainer>
    Copyright @ {currentYear === 2019 ? 2019 : `2019-${currentYear}`}
  </FooterContainer>
}

export default Footer;