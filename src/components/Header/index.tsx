import { FiArrowLeft } from "react-icons/fi";

import GithubImg from "../../assets/github.png";

import { Container, Button } from "./styles";

interface HeaderProps {
  showBackToHome: boolean;
  onBackToHome: () => void;
}

export function Header({ onBackToHome, showBackToHome }: HeaderProps) {
  return (
    <Container>
      <img src={GithubImg} alt="GitHub" />

      <Button onClick={onBackToHome} isVisible={showBackToHome}>
        <FiArrowLeft />
        <span>Voltar para o início</span>
      </Button>
    </Container>
  );
}
