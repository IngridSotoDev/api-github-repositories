import feelingBlue from "../../assets/svg/feeling-blue.svg";
import { Container } from "./styles";

export function UserNotFound() {
  return (
    <Container>
      <img src={feelingBlue} alt="Animação com face de tristeza" />
      <p>Usuário não encontrado!</p>
    </Container>
  );
}
