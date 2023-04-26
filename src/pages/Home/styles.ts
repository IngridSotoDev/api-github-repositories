import styled from "styled-components";

export const Container = styled.div`
  max-width: 128rem;
  width: 90%;
  margin: 0 auto 5rem;
  height: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 1;
`;

export const Loader = styled.span`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  position: relative;
  animation: rotate 1s linear infinite;

  &:before,
  &:after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    inset: 0px;
    border-radius: 50%;
    border: 5px solid #fff;
    animation: prixClipFix 2s linear infinite;
  }

  &:after {
    border-color: #ff3d00;
    animation: prixClipFix 2s linear infinite,
      rotate 0.5s linear infinite reverse;
    inset: 6px;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes prixClipFix {
    0% {
      clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
    }
    25% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
    }
    50% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
    }
    75% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
    }
    100% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
    }
  }
`;

export const Img = styled.img`
  height: 40rem;

  @media (max-width: 920px) {
    height: 25rem;
  }

  @media (max-width: 667px) {
    height: 20rem;
  }
`;

export const Text = styled.p`
  text-align: center;
  font-weight: 400;
  color: var(--light);
  line-height: 3.2rem;
  font-size: 1.8rem;
`;
