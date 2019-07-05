import React from 'react'
import styled, { keyframes } from 'styled-components';
import logo from '../logo.svg'

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

const Logo = styled.img `
  max-height: 8vh;
  pointer-events: none;
  animation: ${keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `} infinite 40s linear;
`;

const currentYear = new Date().getFullYear()

const Copyright = `Copyright @ ${currentYear === 2019 ? currentYear : `2019-${currentYear}`}`

const Footer = () => {
  return <FooterContainer>
    <Logo src = {logo} alt = "logo" />
    {Copyright}
  </FooterContainer>
}

export default Footer;