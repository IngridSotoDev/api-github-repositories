import { Container } from "./styles";
import { FiArrowLeft } from "react-icons/fi";
import GithubImg from "../../assets/images/github.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

interface HeaderProps {
  backToHome: Boolean;
}

export function Header({ backToHome }: HeaderProps) {
  const [back, setBack] = useState<Boolean>(false);

  useEffect(() => {
    return setBack(backToHome);
  }, [setBack, backToHome]);

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
