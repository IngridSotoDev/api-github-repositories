import styled from "styled-components";

export const Container = styled.div`
  max-width: 128rem;
  width: 90%;
  margin: 5rem auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;

  > h1 {
    color: var(--light);
    font-weight: 400;
    font-size: 3.2rem;
    line-height: 2.8rem;
  }

  > img {
    height: 400px;
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;
