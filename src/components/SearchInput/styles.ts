import styled from "styled-components";

export const Container = styled.div`
  margin: 5rem 0;
  max-width: 60rem;
  width: 100%;
  display: flex;

  input {
    border-radius: 0.25rem 0 0 0.25rem;
    background: var(--light);
    color: var(--blue-dark);
    height: 5rem;
    padding: 0 1.8rem;
    max-width: 40rem;
    width: 100%;

    :focus {
      outline: 4px solid #8ecae644;
    }
  }

  button {
    background: var(--orange);
    height: 5rem;
    padding: 0 2rem;
    border-radius: 0 0.25rem 0.25rem 0;
    display: flex;
    align-items: center;
    color: var(--light);

    svg {
      width: 1.6rem;
      height: 1.6rem;
    }

    span {
      margin-left: 1rem;
    }
  }
`;