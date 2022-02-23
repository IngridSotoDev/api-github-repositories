import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";

import { GoRepo, GoStar } from "react-icons/go";
import { toast } from "react-toastify";

import { Header } from "../../components/Header";
import { RepositoriesList } from "../../components/RepositoriesList";
import { StarredList } from "../../components/StarredList";
import { ActionsButtons, Container, UserInformations } from "./styles";

type Params = {
  user: string;
};

type User = {
  login: String;
  name: string;
  bio: String;
  id: Number;
  location: String;
  html_url: string;
  avatar_url: string;
};

interface UserProps {
  back: (value: Boolean) => void;
}

export function User({ back }: UserProps) {
  const params = useParams<Params>();
  const userName = params.user;
  const [user, setUser] = useState({} as User);
  const [showRepos, setShowRepos] = useState(false);
  const [showStarred, setShowStarred] = useState(false);
  // const [userNotFound, setUserNotFound] = useState(true);

  useEffect(() => {
    back(true);
    api
      .get(`${userName}`)
      .then((response) => {
        setUser(response.data);
        // setUserNotFound(false)
      })
      .catch((error) => {
        // setUserNotFound(true)
        toast.error("Usuário não encontrado");
      });
  }, []);

  async function handleUserRepositories() {
    setShowStarred(false);
    setShowRepos(true);
  }

  async function handleUserStarred() {
    setShowRepos(false);
    setShowStarred(true);
  }

  return (
    <Container>
      <UserInformations>
        <img src={user.avatar_url} alt={user.name} />

        <h1>{user.name || "Sem nome"}</h1>
        <a href={user.html_url} target="_blank">
          @{user.login}
        </a>
        {user.bio && <p>{user.bio}</p>}
        {user.location && <p>{user.location}</p>}

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
      {/* TODO view notFound */}
      {/* {userNotFound && ""} */}
      {showRepos && <RepositoriesList />}
      {showStarred && <StarredList />}
    </Container>
  );
}
