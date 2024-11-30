import { ReactNode } from "react";
import { Shelf } from "fast-jsx";

interface CardProps {
  children: ReactNode;
  option?: {
    background?: string;
    gap?: string;
    boundary?: string;
    pressure?: string;
  };
}
export default function Card({ children, option }: CardProps) {
  return (
    <Shelf.Col
      option={{
        display: [option?.gap, "items-center"].filter((v) => v).join(" "),
        width: "w-[353px]",
        boundary: [
          option?.boundary ?? "shadow-md shadow-[#6B7076]/50",
          "rounded-[10px] overflow-hidden",
        ]
          .filter((v) => v)
          .join(" "),
        background: option?.background ?? "bg-white",
        pressure: [option?.pressure, "pt-7"].filter((v) => v).join(" "),
      }}
    >
      {children}
    </Shelf.Col>
  );
}
