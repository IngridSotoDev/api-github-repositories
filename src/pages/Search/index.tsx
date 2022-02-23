import peopleSearchImg from "../../assets/svg/people-search.svg";
import { Container } from "./styles";
import { SearchInput } from "../../components/SearchInput";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export function Search() {
  return (
    <>
      <Header backToHome={false} />
      <Container>
        <h1>Pesquisa Github</h1>

        <SearchInput />

        <img src={peopleSearchImg} alt="" />
      </Container>
      <Footer />
    </>
  );
}
