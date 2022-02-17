import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Search } from "./pages/Search";
import { User } from "./pages/User";
import { Footer } from "./components/Footer";
import { GlobalStyle } from "./styles/global";
import { UserProvider } from "./hooks/useUser";

export function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/user/:user" element={<User />} />
        </Routes>

        <ToastContainer autoClose={3000} />
        <Footer />
        <GlobalStyle />
      </UserProvider>
    </BrowserRouter>
  );
}
