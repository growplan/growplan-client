import { ReactNode } from "react";
import { Shelf } from "fast-jsx";

interface CardProps {
  children: ReactNode;
}
export default function Card({ children }: CardProps) {
  return (
    <Shelf.Col
      option={{
        display: "items-center",
        width: "w-[353px]",
        boundary: "shadow-md rounded-[10px]",
        pressure: "pt-7",
      }}
    >
      {children}
    </Shelf.Col>
  );
}
