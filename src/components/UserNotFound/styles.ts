import styled from "styled-components";

export const Container = styled.div`
  max-width: 128rem;
  width: 90%;
  margin: 2rem auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;

  img {
    height: 40rem;
  }

  p {
    font-weight: 400;
    color: var(--light);
    line-height: 3.2rem;
    font-size: 1.8rem;
  }

  @media (max-width: 920px) {
    img {
      height: 25rem;
    }
  }

  @media (max-width: 667px) {
    img {
      height: 20rem;
    }
  }

`