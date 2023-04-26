import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";

export const GlobalStyle = createGlobalStyle`
  :root {
    --bg-blue: #023047;
    --blue-light: #8ecae6;
    --blue: #219ebc;
    --blue-dark: #126782;
    --yellow: #ebb652;
    --orange: #f79500;
    --orange-dark: #f86400;
    --light: #fbfcfc;
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
  
  button {
    cursor: pointer;
  }
`;
