import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  h2 {
    color: var(--light);
    font-weight: 500;
    line-height: 2.6rem;
    font-size: 2.6rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;