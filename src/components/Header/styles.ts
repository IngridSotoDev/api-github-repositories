import styled from "styled-components";

export const Container = styled.header`
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
`;

type ButtonProps = {
  isVisible: boolean;
};

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  color: var(--orange);
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};

  span {
    margin-left: 1rem;
  }
`;
