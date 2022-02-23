import peopleSearchImg from "../../assets/svg/people-search.svg";
import { Header } from "../../components/Header";
import { SearchInput } from "../../components/SearchInput";
import { Footer } from "../../components/Footer";
import { Container } from "./styles";

export function Search() {
  return (
    <>
      <Header backToHome={false} />
      <Container>
        <h1>Pesquisa Github</h1>

        <SearchInput />

        <img src={peopleSearchImg} alt="Mulher pesquisando usuário" />
      </Container>
      <Footer />
    </>
  );
}
