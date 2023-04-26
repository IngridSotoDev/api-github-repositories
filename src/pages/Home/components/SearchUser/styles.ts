import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  margin: 5rem 0;
  max-width: 128rem;
  width: 100%;
`;

export const Title = styled.h1`
  color: var(--light);
  font-weight: 400;
  font-size: 3.2rem;
  line-height: 2.8rem;
`;

export const Input = styled.input`
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
`;

export const Button = styled.button`
  background: var(--orange);
  height: 5rem;
  padding: 0 2rem;
  border-radius: 0 0.25rem 0.25rem 0;
  display: flex;
  align-items: center;
  color: var(--light);

  transition: background 200ms;

  &:hover:not(:disabled) {
    background: var(--orange-dark);
  }

  &:disabled {
    cursor: not-allowed;
    filter: brightness(0.8);
  }

  svg {
    width: 1.6rem;
    height: 1.6rem;
  }

  span {
    margin-left: 1rem;
    visibility: visible;
    opacity: 1;
  }

  @media (max-width: 390px) {
    span {
      visibility: hidden;
      opacity: 0;
      width: 1px;
      margin: 0;
    }
  }
`;

export const Img = styled.img`
  height: 40rem;
  position: fixed;
  right: 4rem;
  bottom: 4rem;

  @media (max-height: 920px) {
    img {
      height: 30rem;
    }
  }

  @media (max-height: 667px) {
    img {
      height: 25rem;
    }
  }
  @media (max-height: 620px) {
    img {
      height: 0;
    }
  }
`;
