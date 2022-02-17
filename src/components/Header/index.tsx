import { Container } from "./styles";
import { FiArrowLeft } from "react-icons/fi";
import GithubImg from "../../assets/images/github.png";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Container>
      <img src={GithubImg} alt="GitHub" />
      <Link to="/">
        <FiArrowLeft />
        <span>Voltar para o início</span>
      </Link>
    </Container>
  );
}
