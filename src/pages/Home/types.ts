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
