import { IRepository, RepositoryType } from "../../../types";
import { Container, Label, Link, Text } from "./styles";

interface RepositoryItemProps {
  type: RepositoryType;
  repository: IRepository;
}

export function RepositoryItem({ repository, type }: RepositoryItemProps) {
  return (
    <Container type={type}>
      <Link
        type={type}
        target="_blank"
        rel="noreferrer"
        href={repository.html_url}
      >
        {repository.full_name}
      </Link>

      {repository.description && <Text>{repository.description}</Text>}

      <Label type={type}>{repository.language}</Label>
    </Container>
  );
}
