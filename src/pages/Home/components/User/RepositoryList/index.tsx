import { useCallback, useEffect, useState } from "react";
import { IRepository, RepositoryType } from "../../../types";
import { Container, List, Title } from "./styles";
import { api } from "../../../../../services/api";
import { toast } from "react-toastify";
import { RepositoryItem } from "../RepositoryItem";
import { Loader } from "../../../styles";

interface RepositoryListProps {
  userLogin: string;
  type: RepositoryType;
}

export function RepositoryList({ type, userLogin }: RepositoryListProps) {
  const [repositories, setRepositories] = useState<IRepository[]>();
  const [isLoading, setIsLoading] = useState(false);

  const fetchRepositories = useCallback(() => {
    setIsLoading(true);

    api
      .get(`${userLogin}/${type}`)
      .then((response) => {
        setRepositories(response.data);
      })
      .catch(() => {
        toast.error("Erro ao buscar repositórios!");
      })
      .finally(() => setIsLoading(false));
  }, [type, userLogin]);

  useEffect(fetchRepositories, [fetchRepositories]);

  return (
    <Container>
      <Title>{type === "starred" ? "Favoritos" : "Repositórios"}</Title>

      {isLoading ? (
        <Loader />
      ) : (
        <List>
          {!!repositories?.length &&
            repositories.map((repository) => {
              return (
                <RepositoryItem
                  type={type}
                  key={repository.id}
                  repository={repository}
                />
              );
            })}

          {!repositories?.length && <p>não há repositórios</p>}
        </List>
      )}
    </Container>
  );
}
