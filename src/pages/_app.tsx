import { Axios } from "apis/axios";
import { NextPage } from "next";
import { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";
import { SWRConfig } from "swr";
import AuthService from "utils/AuthService";
import "../styles/paginate.scss";
import "../styles/style.scss";

const GlobalStyle = createGlobalStyle`
/* Todo: ここでいわゆるリセットCSSを流す */
  body {
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
    font-family: Noto Sans CJK JP;
    font-size: 12px;
  }

  button {
      border: none;
      padding: 0;
      background-color: transparent;
      cursor: pointer;
      outline: none;
      padding: 0;
      appearance: none;
    }

    html, body, div, span, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    abbr, address, cite, code,
    del, dfn, em, img, ins, kbd, q, samp,
    small, strong, sub, sup, var,
    b, i,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section, summary,
    time, mark, audio, video {
    margin:0;
    padding:0;
    border:0;
    outline:0;
    vertical-align:baseline;
    background:transparent;
    }


    a {
    margin:0;
    padding:0;
    vertical-align:baseline;
    text-decoration: none;
    color: inherit;
    }

    ul, ol {
    list-style:none;
    }

  input,textarea {
    padding: 0;
    border: none;
    border-radius: 0;
    outline: none;
    background: none;
    -webkit-appearance: none;
  }
  textarea {
    resize: none;
    ::-webkit-resizer {
      display: none;
    }
}

  #__next {
    display: grid;
    grid-template-rows: 56px 1fr;
    height: 100vh;
}
`;

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <SWRConfig
      value={{
        fetcher: (url) => {
          const auth = new AuthService();
          const token =
            "eyJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50X3R5cGUiOiJZZW50YTo6Q2FyZWVyQWdlbnRNZW1iZXIiLCJhY2NvdW5092lkIjoxLCJ0b7tlbl90eXBlIjoiYWNjZXNzX3Rva2VuIiwiaWF0IjoxNjAwMjM0NzUxLCJleHAiOjE2MDI4MjY3NTF9.qXLyVAxRGeHdiKybWqe9OItaVVqo4LuDzsoha4IN364";
          return Axios.get(url, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }).then((res) => {
            return res;
          });
        },
      }}
    >
      <Component {...pageProps} />
      <GlobalStyle />
    </SWRConfig>
  );
};

export default App;
