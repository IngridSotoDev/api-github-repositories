import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Container } from "./styles";

export function SearchInput() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");

  async function handleSearchUser() {
    navigate(`/user/${user}`);
  }

  return (
    <Container>
      <input
        placeholder="Digite o nome do usuário"
        value={user}
        onChange={(event) => setUser(event.target.value)}
      />
      <button onClick={handleSearchUser}>
        <FiSearch />
        <span>Pesquisar</span>
      </button>
    </Container>
  );
}
