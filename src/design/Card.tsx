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
        boundary:
          "shadow-md shadow-[#6B7076]/50 rounded-[10px] overflow-hidden",
        background: "bg-white",
        pressure: "pt-7",
      }}
    >
      {children}
    </Shelf.Col>
  );
}
