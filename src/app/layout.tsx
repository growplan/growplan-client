import { ReactNode, useEffect } from "react";
import { cn } from "fast-jsx/util";
import { Button } from "fast-jsx/widget";
import { useNavigate, useLocation } from "react-router-dom";
import { Header } from "@/components/Header";

export default function GrowPlanLayout({ children }: { children: ReactNode }) {
  const container = {
    displays: "flex flex-col ",
    sizes: "w-full min-h-screen",
    fonts: "font-pretendard-var antialiased",
    styles: "scrollbar-hidden",
  };

  return (
    <div className={cn(container)}>
      <Header />
      {children}
    </div>
  );
}
