import { FiSearch } from "react-icons/fi";

import peopleSearchImg from "../../../../assets/people-search.svg";

import { Container, Button, Input, Img, Title } from "./styles";

interface SearchUserProps {
  value: string;
  onSearch: () => void;
  onChange: (user: string) => void;
}

export function SearchUser({ value, onChange, onSearch }: SearchUserProps) {
  return (
    <Container>
      <Title>Pesquisa Github</Title>

      <div style={{ display: "flex" }}>
        <Input
          type="text"
          value={value}
          placeholder="Digite o nome do usuário"
          onChange={(event) => onChange(event.target.value)}
        />

        <Button onClick={onSearch} disabled={!value}>
          <FiSearch />
          <span>Pesquisar</span>
        </Button>
      </div>

      <Img src={peopleSearchImg} alt="Mulher pesquisando usuário" />
    </Container>
  );
}
