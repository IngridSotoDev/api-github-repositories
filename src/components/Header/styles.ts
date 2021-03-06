import styled from "styled-components";

export const Container = styled.div`
  max-width: 128rem;
  width: 90%;
  margin: 0 auto;
  padding: 5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 10rem;
  }

  a {
    display: flex;
    align-items: center;
    color: var(--orange);

    span {
      margin-left: 1rem;
    }
  }
`;
