import styled, { css } from "styled-components";

type ContainerProps = {
  variant: "primary" | "secondary";
};

export const Container = styled.button<ContainerProps>`
  min-width: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--light);
  height: 4rem;
  padding: 0 1.8rem;
  border-radius: 0.25rem;
  transition: filter 0.2s;

  ${({ variant }) =>
    variant === "primary" &&
    css`
      background: var(--orange);
    `}

  ${({ variant }) =>
    variant === "secondary" &&
    css`
      background: var(--blue);
    `}

  span {
    margin-left: 1rem;
  }

  &:hover {
    filter: brightness(0.8);
  }
`;
