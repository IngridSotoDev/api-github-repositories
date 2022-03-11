import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { Repository } from "../Repository";
import { Container } from "./styles";

interface Repositories {
  id: Number;
  name: String;
  full_name: String;
  html_url: String;
  description: String;
  language: String;
}

type Params = {
  user: string;
};

export function RepositoriesList() {
  const params = useParams<Params>();
  const user = params.user;
  const [repositories, setRepositories] = useState<Repositories[]>([]);

  useEffect(() => {
    api
      .get(`${user}/repos`)
      .then((response) => {
        setRepositories(response.data);
      })
      .catch((error) => {
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
              key={`${repository.id}`}
              description={repository.description}
              full_name={repository.full_name}
              html_url={`${repository.html_url}`}
              language={repository.language}
            />
          );
        })}
      </ul>
    </Container>
  );
}
