import { createGlobalStyle } from "styled-components";
import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyle = createGlobalStyle`

  :root {
    --bg-blue: #023047;

    --blue-light: #8ECAE6;
    --blue: #219EBC;
    --blue-dark: #126782;

    --yellow: #FFB703;
    --yellow-orange: #FD9E02;
    --orange: #FB8500;

    --light: #FBFCFC;
  }


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    text-decoration: none;
    font-family: "Poppins", sans-serif;
  }


  html {
    font-size: 62.5%; /* 10px */
  }

  body, button, input, textarea {
    /* Intervalo de tamanho = menor, padrão, maior */
    font-size: clamp(14px, 1.6rem, 2vw);
    /* font-family: "Poppins", sans-serif; */
    background: var(--bg-blue);
  }

  #root {
    height: 100vh;
    display: flex;
    flex-direction: column;

  }

  .sr-only {
    position: absolute;
    height: 1px;
    width: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip-path: rec(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  button {
    cursor: pointer;
  }
`;
