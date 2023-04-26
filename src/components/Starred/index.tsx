import { StarredItem } from "./styles";

interface StarredProps {
  html_url: string;
  language: string;
  full_name: string;
  description: string;
}

export function Starred({
  full_name,
  html_url,
  description,
  language,
}: StarredProps) {
  return (
    <StarredItem>
      <a href={html_url} target="_blank" rel="noreferrer">
        {full_name}
      </a>
      {description && <p>{description}</p>}
      <p className="languageItem">{language}</p>
    </StarredItem>
  );
}
