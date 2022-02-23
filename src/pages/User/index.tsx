import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";

import { GoRepo, GoStar } from "react-icons/go";

import { Header } from "../../components/Header";
import { RepositoriesList } from "../../components/RepositoriesList";
import { StarredList } from "../../components/StarredList";
import { UserNotFound } from "../../components/UserNotFound";
import { Footer } from "../../components/Footer";
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

export function User() {
  const params = useParams<Params>();
  const userName = params.user;
  const [user, setUser] = useState({} as User);
  const [showUser, setShowUser] = useState(false);
  const [showRepos, setShowRepos] = useState(false);
  const [showStarred, setShowStarred] = useState(false);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    api
      .get(`${userName}`)
      .then((response) => {
        setUser(response.data);
        setNotFound(false);
        setShowUser(true)
      })
      .catch((error) => {
        setNotFound(true);
      });
  }, [setNotFound, setShowUser]);

  async function handleUserRepositories() {
    setShowStarred(false);
    setShowRepos(true);
  }

  async function handleUserStarred() {
    setShowRepos(false);
    setShowStarred(true);
  }

  return (
    <>
      <Header backToHome={true} />

      {notFound && <UserNotFound />}

      {showUser && (
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
              <button
                className="btn-repositories"
                onClick={handleUserRepositories}
              >
                <GoRepo />
                <span>Repositórios</span>
              </button>

              <button className="btn-starred" onClick={handleUserStarred}>
                <GoStar />
                <span>Favoritos</span>
              </button>
            </ActionsButtons>
          </UserInformations>

          {showRepos && <RepositoriesList />}
          {showStarred && <StarredList />}
        </Container>
      )}

      <Footer />
    </>
  );
}
