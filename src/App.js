import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Footer from './components/Footer'
import Body from './components/Body'

const GlobalStyle = createGlobalStyle`
  html {
    background-color: #282828;
  }
`
const AppContainer = styled.div`
  color: white;
`;

const AppHeader = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Oleo Script Swash Caps', cursive;
  font-size: 2.5em;
  user-select: none;
`;

const App = () => {
  return <AppContainer>
    <GlobalStyle />
    <AppHeader>What time is it right now?</AppHeader>
    <Body />
    <Footer />
  </AppContainer>
}

export default App;
