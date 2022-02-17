import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 5rem;
  gap: 10rem;

  img {
    height: 20rem;
    clip-path: circle();
  }
`;

export const UserInformations = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.8rem;

  h1 {
    color: var(--light);
    font-size: 3.6rem;
    font-weight: 700;
    line-height: 3.2rem;
  }

  a {
    font-size: 2.2rem;
    text-decoration: none;
    color: var(--orange);
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
  
  p {
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--light);
  }
`;

export const ActionsButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  button {
    min-width: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--light);
    height: 4rem;
    padding: 0 2.4rem;
    border-radius: 0.25rem;
    transition: filter 0.2s;

    span {
      margin-left: 1rem;
    }

    &.btn-starred {
      background: var(--orange);
    }

    &.btn-repositories {
      background: var(--blue);
    }

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
