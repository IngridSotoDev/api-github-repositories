import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Search } from "./pages/Search";
import { User } from "./pages/User";
import { GlobalStyle } from "./styles/global";

export function App() {

 return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/user/:user" element={<User />} />
      </Routes>

      <ToastContainer autoClose={3000} />
      <GlobalStyle />
    </BrowserRouter>
  );
}
