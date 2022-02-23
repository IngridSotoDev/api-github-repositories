import styled from "styled-components";

export const Container = styled.div`
  max-width: 128rem;
  width: 90%;
  margin: 0 auto 5rem;
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;

  @media(max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const UserInformations = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  img {
    width: 20rem;
    height: 20rem;
    clip-path: circle();
  }

  h1 {
    margin: 2rem 0;
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
    min-width: 15rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--light);
    height: 4rem;
    padding: 0 1.8rem;
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
