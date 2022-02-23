import { KeyboardEvent } from 'react';
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

export function SearchInput() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");

  async function handleSearchUser() {
    navigate(`/user/${user}`);
  }

  function handleKeypress(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      handleSearchUser();
    }
  }

  return (
    <Container>
      <input
        placeholder="Digite o nome do usuário"
        value={user}
        onChange={(event) => setUser(event.target.value)}
        onKeyPress={handleKeypress}
      />
      <button onClick={handleSearchUser}>
        <FiSearch />
        <span>Pesquisar</span>
      </button>
    </Container>
  );
}
