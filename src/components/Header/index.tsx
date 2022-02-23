import { Container } from "./styles";
import { FiArrowLeft } from "react-icons/fi";
import GithubImg from "../../assets/images/github.png";
import { Link } from "react-router-dom";

interface HeaderProps {
  back: Boolean;
  setBack: (value: Boolean) => void;
}

export function Header({ back, setBack }: HeaderProps) {
  return (
    <Container>
      <img src={GithubImg} alt="GitHub" />
      <Link
        to="/"
        style={back ? { visibility: "visible" } : { visibility: "hidden" }}
        onClick={() => setBack(false)}
      >
        <FiArrowLeft />
        <span>Voltar para o início</span>
      </Link>
    </Container>
  );
}
