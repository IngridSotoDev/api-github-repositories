import { ToastContainer } from "react-toastify";

import { HomePage } from "./pages/Home";

import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <HomePage />
      <ToastContainer autoClose={3000} />
      <GlobalStyle />
    </>
  );
}
