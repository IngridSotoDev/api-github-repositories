import styled from "styled-components";

export const Container = styled.div`
  max-width: 128rem;
  width: 90%;
  margin: 5rem auto;
  height: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 1;

  > h1 {
    color: var(--light);
    font-weight: 400;
    font-size: 3.2rem;
    line-height: 2.8rem;
  }

  > img {
    height: 40rem;
    position: fixed;
    right: 4rem;
    bottom: 4rem;
  }

  @media (max-height: 900px) {
    img {
      height: 30rem;
    }
  }

  @media (max-height: 667px) {
    img {
      height: 25rem;
    }
  }
`;
