import styled, { css } from "styled-components";
import { RepositoryType } from "../../../types";

export const Container = styled.li<{ type: RepositoryType }>`
  list-style: none;
  border-radius: 0.25rem;
  padding: 2rem 3rem;
  border: 1px solid var(--blue-dark);
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${({ type }) =>
    type === "repos" &&
    css`
      border: 1px solid var(--blue-dark);
    `}

  ${({ type }) =>
    type === "starred" &&
    css`
      border: 1px solid var(--orange);
    `}
`;

export const Link = styled.a<{ type: RepositoryType }>`
  ${({ type }) =>
    type === "repos" &&
    css`
      color: var(--blue-light);
    `}

  ${({ type }) =>
    type === "starred" &&
    css`
      color: var(--orange);
    `}

  font-weight: 500;
  font-size: 1.8rem;
  transition: filter 0.4s;

  &:hover {
    filter: brightness(2);
  }
`;

export const Text = styled.p`
  color: var(--light);
  font-weight: 300;
  font-size: 1.4rem;
`;

export const Label = styled.span<{ type: RepositoryType }>`
  font-weight: 700;
  width: 100%;
  text-align: right;

  ${({ type }) =>
    type === "repos" &&
    css`
      color: var(--blue);
    `}

  ${({ type }) =>
    type === "starred" &&
    css`
      color: var(--orange);
    `}
`;
