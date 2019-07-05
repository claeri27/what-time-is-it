import React from 'react';
import styled from 'styled-components';

import Footer from './components/Footer'
import Body from './components/Body'

const AppContainer = styled.div`
  color: white;
  background-color: #282828;
`;

const AppHeader = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: 'Oleo Script Swash Caps', cursive;
  font-size: 2.5em;
`;

const App = () => {
  return <AppContainer>
    <AppHeader>What time is it right now?</AppHeader>
    <Body />
    <Footer />
  </AppContainer>
}

export default App;
