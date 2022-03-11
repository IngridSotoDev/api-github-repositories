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

type UserData = {
  login: String;
  name: string;
  bio: String;
  id: Number;
  location: String;
  html_url: string;
  avatar_url: string;
};

export function User() {
  const { user } = useParams<Params>();
  const [userData, setUserData] = useState({} as UserData);
  const [showUser, setShowUser] = useState(false);
  const [showRepos, setShowRepos] = useState<boolean>();
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    api
      .get(`${user}`)
      .then((response) => {
        setUserData(response.data);
        setNotFound(false);
        setShowUser(true);
      })
      .catch((error) => {
        setNotFound(true);
      });
  }, [user]);

  function handleShowRepos(value = false) {
    setShowRepos(value);
  }

  return (
    <>
      <Header backToHome={true} />

      {notFound && <UserNotFound />}

      {showUser && (
        <Container>
          <UserInformations>
            <img src={userData.avatar_url} alt={userData.name} />

            <h1>{userData.name || "Sem nome"}</h1>
            <a href={userData.html_url} target="_blank" rel="noreferrer">
              @{userData.login}
            </a>
            <p>{userData?.bio ?? ""}</p>
            {userData.location && <p>{userData.location}</p>}

            <ActionsButtons>
              <button
                className="btn-repositories"
                onClick={() => handleShowRepos(true)}
              >
                <GoRepo />
                <span>Repositórios</span>
              </button>

              <button
                className="btn-starred"
                onClick={() => handleShowRepos(false)}
              >
                <GoStar />
                <span>Favoritos</span>
              </button>
            </ActionsButtons>
          </UserInformations>

          {showRepos === undefined ? (
            ""
          ) : showRepos ? (
            <RepositoriesList />
          ) : (
            <StarredList />
          )}
        </Container>
      )}

      <Footer />
    </>
  );
}
