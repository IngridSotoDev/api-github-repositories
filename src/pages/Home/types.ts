export interface IUser {
  id: number;
  bio: string;
  name: string;
  login: string;
  location: string;
  html_url: string;
  avatar_url: string;
}

export type CurrentContainer = "search" | "user" | "loading" | "notFound";

export type RepositoryType = "repos" | "starred";

export interface IRepository {
  id: string;
  language: string;
  html_url: string;
  full_name: string;
  description: string;
}
