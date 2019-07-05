import React from 'react';
import styled from 'styled-components';

import Footer from './components/Footer'

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const AppHeader = styled.h1`
`;

const App = () => {
  return <AppContainer>
    <AppHeader>What time is it right now?</AppHeader>
    <Footer/>
  </AppContainer>
}

export default App;
