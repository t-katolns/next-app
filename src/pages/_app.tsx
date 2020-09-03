import { NextPage } from "next";
import { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* Todo: ここでいわゆるリセットCSSを流す */
  body {
    margin: 0;
    padding: 0;
  }
  p {
    margin: 0;
    padding: 0;
  }


  #__next {
  display: grid;
  grid-template-rows: 56px 1fr;
  height: 100vh;
}
`;

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    // <StyledThemeProvider theme={}>
    //   <Component {...pageProps} />
    //   <GlobalStyle />
    // </StyledThemeProvider>
    <>
      <Component />
      <GlobalStyle />
    </>
  );
};

export default App;
