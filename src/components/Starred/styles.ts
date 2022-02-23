import styled from "styled-components";

export const StarredItem = styled.li`
  list-style: none;
  border-radius: 0.25rem;
  padding: 2rem 3rem;
  border: 1px solid var(--orange);
  display: flex;
  flex-direction: column;
  gap: 1rem;

  a {
    color: var(--orange);
    font-weight: 500;
    font-size: 1.8rem;
    transition: filter 0.4s;

    &:hover {
      filter: brightness(2);
    }
  }

  p {
    color: white;
    font-weight: 300;
    font-size: 1.4rem;
  }

  .languageItem {
    font-weight: 700;
    width: 100%;
    text-align: right;
    color: var(--blue);
  }
`;
