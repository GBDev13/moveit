import { createGlobalStyle } from 'styled-components';
import {ThemeType} from '.'

export const GlobalStyle = createGlobalStyle<{theme: ThemeType}>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
      transition:.3s;
    }
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.blueOne};
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover{
      background: ${({ theme }) => theme.loading};
    }
    ::-webkit-scrollbar-track{
      background: ${({ theme }) => theme.input};
      border-radius: 10px;
    }
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background:${({ theme }) => theme.body};
    transition: all 0.50s linear;
    color:${({ theme }) => theme.text};
  }

  body,
  input,
  textarea,
  button {
    font: 400 1rem "Inter", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
  ul{
    list-style:none;
  }
`