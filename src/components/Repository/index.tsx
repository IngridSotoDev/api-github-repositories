import { RepositoryItem } from "./styles";

interface RepositoryProps {
  language: string;
  html_url: string;
  full_name: string;
  description: string;
}

export function Repository({
  full_name,
  html_url,
  description,
  language,
}: RepositoryProps) {
  return (
    <RepositoryItem>
      <a href={html_url} target="_blank" rel="noreferrer">
        {full_name}
      </a>
      {description && <p>{description}</p>}
      <p className="languageItem">{language}</p>
    </RepositoryItem>
  );
}
