import { ReactNode } from "react";
import { cn } from "fast-jsx/util";
import { Header } from "../Header";
import Dashboard from ".";

export default function Layout({ children }: { children: ReactNode }) {
  const container = {
    displays: "flex gap-x-3.5",
    boundaries: "p-5",
  };
  const body = {
    displays: "flex flex-col",
    sizes: "w-full h-[600px]",
  };
  return (
    <div>
      <Header />
      <div className={cn(container)}>
        <Dashboard.Menu />
        <div className={cn(body)}>{children}</div>
      </div>
    </div>
  );
}
