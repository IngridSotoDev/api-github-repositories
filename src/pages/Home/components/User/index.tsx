import { useState } from "react";
import { GoRepo, GoStar } from "react-icons/go";

import { IUser, RepositoryType } from "../../types";

import { RepositoryList } from "./RepositoryList";
import { Button } from "../../../../components/Button";

import {
  Img,
  Text,
  Link,
  Title,
  Container,
  ActionsButtons,
  UserInformation,
} from "./styles";

interface UserProps {
  user: IUser;
}

export function User({ user }: UserProps) {
  const [selectedRepos, setSelectedRepos] = useState<RepositoryType>();

  return (
    <Container>
      <UserInformation>
        <Img src={user.avatar_url} alt={user.name} />

        <Title>{user.name}</Title>

        <Link href={user.html_url} target="_blank" rel="noreferrer">
          @{user.login}
        </Link>

        <Text>{user?.bio ?? ""}</Text>

        {user.location && <Text>{user.location}</Text>}

        <ActionsButtons>
          <Button
            icon={<GoRepo />}
            variant="secondary"
            title="Repositórios"
            onClick={() => setSelectedRepos("repos")}
          />

          <Button
            icon={<GoStar />}
            title="Favoritos"
            onClick={() => setSelectedRepos("starred")}
          />
        </ActionsButtons>
      </UserInformation>

      {selectedRepos && (
        <RepositoryList userLogin={user.login} type={selectedRepos} />
      )}
    </Container>
  );
}
