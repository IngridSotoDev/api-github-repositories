import { ReactNode } from "react";
import { Container } from "./styled";

interface ButtonProps {
  title: string;
  icon: ReactNode;
  onClick: () => void;
  variant?: "primary" | "secondary";
}

export function Button({
  icon,
  title,
  onClick,
  variant = "primary",
}: ButtonProps) {
  return (
    <Container variant={variant} onClick={onClick}>
      {icon}
      <span>{title}</span>
    </Container>
  );
}
