import { RepositoryItem } from "./styles";
interface RepositoryProps {
  full_name: String;
  html_url: string;
  description: String;
  language: String;
}

export function Repository({
  full_name,
  html_url,
  description,
  language,
}: RepositoryProps) {
  
  return (
    <RepositoryItem>
      <a href={html_url}>{full_name}</a>
      {description && <p>{description}</p>}
      <p>{language}</p>
    </RepositoryItem>
  );
}
