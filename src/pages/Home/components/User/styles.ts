import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20rem;

  @media (max-width: 1024px) {
    gap: 5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const UserInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Img = styled.img`
  width: 20rem;
  height: 20rem;
  clip-path: circle();
`;

export const Title = styled.h1`
  margin: 2rem 0;
  color: var(--light);
  font-size: 3.6rem;
  font-weight: 700;
  line-height: 3.2rem;
`;

export const Link = styled.a`
  font-size: 2.2rem;
  text-decoration: none;
  color: var(--orange);
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const Text = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--light);
`;

export const ActionsButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

export const Loader = styled.span`
  width: 1.6rem;
  height: 1.6rem;
  border: 5px solid #fff;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
