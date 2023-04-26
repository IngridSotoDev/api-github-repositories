import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { api } from "../../services/api";

import { Starred } from "../Starred";

import { Container } from "./styled";

interface IStarred {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  language: string;
}

interface StarredListProps {
  user: string;
}

export function StarredList({ user }: StarredListProps) {
  const [starredList, setStarredList] = useState<IStarred[]>([]);

  useEffect(() => {
    api
      .get(`${user}/starred`)
      .then((response) => {
        setStarredList(response.data);
      })
      .catch(() => {
        toast.error("Erro ao buscar repositórios!");
      });
  }, [user]);

  return (
    <Container>
      <h2>Favoritos</h2>
      <ul>
        {starredList.map((starred) => {
          return (
            <Starred
              key={starred.id}
              html_url={starred.html_url}
              language={starred.language}
              full_name={starred.full_name}
              description={starred.description}
            />
          );
        })}
      </ul>
    </Container>
  );
}
