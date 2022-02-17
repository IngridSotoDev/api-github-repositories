import { createContext, useState, ReactNode, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

interface User {
  login: String;
  name: string;
  bio: String;
  id: Number;
  location: String;
  html_url: string;
  avatar_url: string;
}

interface UserRepositoriesProps {
  id: Number;
  name: String;
  full_name: String;
  html_url: String;
  description: String;
  language: String;
}

interface UserStarredProps {
  id: Number;
  name: String;
  full_name: String;
  html_url: String;
  description: String;
  language: String;
}

interface UserProviderProps {
  children: ReactNode;
}

interface UserContextData {
  user: User;
  userRepositories: UserRepositoriesProps[];
  userStarred: UserStarredProps[];
  getUser: (userName: String) => Promise<void>;
  getUserRepositories: (userName: String) => Promise<void>;
  getUserStarred: (userName: String) => Promise<void>;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

export function UserProvider({ children }: UserProviderProps) {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>({} as User);
  const [userRepositories, setUserRepositories] = useState<UserRepositoriesProps[]>([]);
  const [userStarred, setUserStarred] = useState<UserStarredProps[]>([]);

  async function getUser(userName: String) {
    await api
      .get(`${userName}`)
      .then((response) => {
        setUser(response.data);
        navigate(`/user/${userName}`);
      })
      .catch((error) => {
        toast.error("Usuário não encontrado");
      });
  }

  async function getUserRepositories(userName: String) {
    await api
      .get(`${userName}/repos`)
      .then((response) => {
        setUserRepositories(response.data);
      })
      .catch((erro) => {
        toast.error("Usuário não encontrado");
      });
  }

  async function getUserStarred(userName: String) {
    await api
      .get(`${userName}/starred`)
      .then((response) => {
        setUserStarred(response.data);
      })
      .catch((erro) => {
        toast.error("Usuário não encontrado");
      });
  }

  return (
    <UserContext.Provider
      value={{
        user,
        userRepositories,
        userStarred,
        getUser,
        getUserRepositories,
        getUserStarred,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);

  return context;
}
