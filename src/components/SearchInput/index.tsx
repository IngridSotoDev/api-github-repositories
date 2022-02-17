import { useState } from "react";
import { useUser } from "../../hooks/useUser";
import { FiSearch } from "react-icons/fi";
import { Container } from "./styles";

export function SearchInput() {
  const { getUser } = useUser();

  const [user, setUser] = useState("");

  async function handleSearchUser() {
    await getUser(user)
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
