import { GoRepo, GoStar } from "react-icons/go";

import { IUser } from "../../types";

import { Button } from "../../../../components/Button";

import {
  Img,
  Text,
  Link,
  Title,
  ActionsButtons,
  UserInformation,
} from "./styles";

interface UserProps {
  user: IUser;
}

export function User({ user }: UserProps) {
  return (
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
          onClick={() => {}}
          variant="secondary"
          title="Repositórios"
        />

        <Button icon={<GoStar />} title="Favoritos" onClick={() => {}} />
      </ActionsButtons>
    </UserInformation>
  );
}
