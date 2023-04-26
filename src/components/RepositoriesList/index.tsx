import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { api } from "../../services/api";

import { Repository } from "../Repository";

import { Container } from "./styles";

interface Repositories {
  id: number;
  name: string;
  html_url: string;
  language: string;
  full_name: string;
  description: string;
}

interface RepositoriesListProps {
  user: string;
}

export function RepositoriesList({ user }: RepositoriesListProps) {
  const [repositories, setRepositories] = useState<Repositories[]>([]);

  useEffect(() => {
    api
      .get(`${user}/repos`)
      .then((response) => {
        setRepositories(response.data);
      })
      .catch(() => {
        toast.error("Erro ao buscar repositórios!");
      });
  }, [user]);

  return (
    <Container>
      <h2>Repositórios</h2>
      <ul>
        {repositories.map((repository) => {
          return (
            <Repository
              key={repository.id}
              html_url={repository.html_url}
              language={repository.language}
              full_name={repository.full_name}
              description={repository.description}
            />
          );
        })}
      </ul>
    </Container>
  );
}
