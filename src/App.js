import React, { useState } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import Footer from './components/Footer'
import Body from './components/Body'
import lightTheme from "./themes/light"
import darkTheme from "./themes/dark"

const GlobalStyle = createGlobalStyle`
  html {
    background: ${props => props.theme.colors.background}
  }
`
const AppContainer = styled.div`
  color: ${props => props.theme.colors.textColor};
`;

const AppHeader = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Oleo Script Swash Caps', cursive;
  font-size: 3em;
  user-select: none;
`;

const Button = styled.button`
`;

const App = () => {
  const [lightMode, setLightMode] = useState(false);

  return <ThemeProvider theme={lightMode === false ? darkTheme : lightTheme}>
    <AppContainer>
      <GlobalStyle />
      <AppHeader>
        What time is it right now?
        <Button onClick={() => lightMode === false ? setLightMode(true) : setLightMode(false)}>THEME</Button>
      </AppHeader>
      <Body />
      <Footer />
    </AppContainer>
  </ThemeProvider>
}

export default App;
