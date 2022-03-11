import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { Starred } from "../Starred";
import { Container } from "./styled";

interface Starreds {
  id: Number;
  name: String;
  full_name: String;
  html_url: String;
  description: String;
  language: String;
}

type Params = {
  user: string;
}

export function StarredList() {
  const params = useParams<Params>();
  const user = params.user
  const [starreds, setStarreds] = useState<Starreds[]>([]);

  useEffect(() => {
    api
      .get(`${user}/starred`)
      .then((response) => {
        setStarreds(response.data);
      })
      .catch((erro) => {
        toast.error("Erro ao buscar repositórios!");
      });
  }, [user]);

  return (
    <Container>
      <h2>Favoritos</h2>
      <ul>
        {starreds.map((starred) => {
          return (
            <Starred
              key={`${starred.id}`}
              description={starred.description}
              full_name={starred.full_name}
              html_url={`${starred.html_url}`}
              language={starred.language}
            />
          );
        })}
      </ul>
    </Container>
  );
}
