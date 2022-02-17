import { Header } from "../../components/Header";
import { RepositoriesList } from "../../components/RepositoriesList";
import { StarredList } from "../../components/StarredList";
import { UserDetails } from "../../components/UserDetails";
import { Container } from "./styles";

export function User() {
  return (
    <Container>
      <Header />
      <UserDetails />
      <StarredList />
      <RepositoriesList />
    </Container>
  );
}
