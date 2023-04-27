import { useMemo, useState } from "react";

import { CurrentContainer, IUser } from "./types";

import { api } from "../../services/api";

import feelingBlue from "../../assets/feeling-blue.svg";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SearchUser } from "./components/SearchUser";

import { Container, Img, Loader, Text } from "./styles";
import { User } from "./components/User";

export function HomePage() {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState<IUser>();
  const [currentContainer, setCurrentContainer] =
    useState<CurrentContainer>("search");

  const showBackToHome = useMemo<boolean>(
    () => ["user", "notFound"].includes(currentContainer),
    [currentContainer]
  );

  const Containers = {
    loading: <Loader />,
    search: (
      <SearchUser
        value={search}
        onSearch={onSearchUser}
        onChange={(user) => setSearch(user)}
      />
    ),
    notFound: (
      <>
        <Img src={feelingBlue} alt="Animação com face de tristeza" />
        <Text>Usuário não encontrado!</Text>
      </>
    ),
    user: user && <User user={user} />,
  };

  function handleBackToHome() {
    setSearch("");
    setUser(undefined);
    setCurrentContainer("search");
  }

  function onSearchUser() {
    setCurrentContainer("loading");

    api
      .get(search)
      .then((response) => {
        setUser(response.data);
        setCurrentContainer("user");
      })
      .catch(() => {
        setCurrentContainer("notFound");
      });
  }

  return (
    <>
      <Header onBackToHome={handleBackToHome} showBackToHome={showBackToHome} />
      <Container>{Containers[currentContainer]}</Container>
      <Footer />
    </>
  );
}
