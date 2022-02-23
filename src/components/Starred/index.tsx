import { StarredItem } from "./styles";

interface StarredProps {
  full_name: String;
  html_url: string;
  description: String;
  language: String;
}

export function Starred({
  full_name,
  html_url,
  description,
  language,
}: StarredProps) {
  
  return (
    <StarredItem>
      <a href={html_url} target="_blank">{full_name}</a>
      {description && <p>{description}</p>}
      <p className="languageItem">{language}</p>
    </StarredItem>
  );
}
