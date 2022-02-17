import { GoRepo, GoStar } from "react-icons/go";
import { useUser } from "../../hooks/useUser";
import { ActionsButtons, Container, UserInformations } from "./styles";

export function UserDetails() {
  const { user, getUserRepositories, getUserStarred } = useUser();

  async function handleUserRepositories() {
    await getUserRepositories(user.login);
  }

  async function handleUserStarred() {
    await getUserStarred(user.login);
  }

  return (
    <Container>
      <img src={user.avatar_url} alt={user.name} />

      <UserInformations>
        <h1>{user.name || "Sem nome"}</h1>
        <a href={user.html_url}>@{user.login}</a>
        {user.bio ? (<p>{user.bio}</p>) : '' }
        {user.location ? (<p>{user.location}</p>) : '' }

      <ActionsButtons>
        <button className="btn-repositories" onClick={handleUserRepositories}>
          <GoRepo />
          <span>Repositórios</span>
        </button>

        <button className="btn-starred" onClick={handleUserStarred}>
          <GoStar />
          <span>Favoritos</span>
        </button>
      </ActionsButtons>
      
      </UserInformations>

    </Container>
  );
}
