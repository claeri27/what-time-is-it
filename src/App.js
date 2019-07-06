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
  font-size: 2.3em;
  user-select: none;
  margin-bottom: 10px;
`;

const Button = styled.button`
  position: absolute;
  right: 7px;
  top: 7px;
  padding: 13px;
  background: ${props => props.theme.colors.buttonColor};
  user-select: none;
  border-radius: 5px;
  cursor: pointer;
  &:focus {outline: 0;}
`;

const App = () => {
  const stored = localStorage.getItem("lightMode")
  const [lightMode, setLightMode] = useState(stored === "true" ? true : false);

  return <ThemeProvider theme={lightMode === false ? darkTheme : lightTheme}>
    <AppContainer>
      <GlobalStyle />
      <AppHeader>
        <Button onClick={() => {
          setLightMode(!lightMode);
          localStorage.setItem("lightMode", !lightMode);
        }}></Button>
      </AppHeader>
      <Body />
      <Footer />
    </AppContainer>
  </ThemeProvider>
}

export default App;
