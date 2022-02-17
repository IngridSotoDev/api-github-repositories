import peopleSearchImg from "../../assets/svg/people-search.svg";
import { Container } from "./styles";
import { SearchInput } from "../../components/SearchInput";

export function Search() {
  return (
    <>

      <Container>
        <h1>Pesquisa Github</h1>

        <SearchInput />

        <img src={peopleSearchImg} alt="" />
      </Container>
    </>
  );
}
