import { ReactNode } from "react";
import { cn } from "fast-jsx/util";
import { Header } from "../../design/Header";
import Dashboard from ".";
import { matchPath, useLocation } from "react-router-dom";

export default function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const headerExceptions = ["/dashboard/records/:recordId"];
  const exceptions = ["/dashboard/records/post"];
  const isHeaderException = [...headerExceptions, ...exceptions].some((path) =>
    matchPath({ path }, location.pathname)
  );
  const isException = exceptions.some((path) =>
    matchPath({ path }, location.pathname)
  );
  const container = {
    displays: "flex gap-x-3.5",
    boundaries: "p-5",
    sizes: "h-screen overflow-y-auto",
    backgrounds: "bg-[#FAFCFF]",
  };
  const body = {
    displays: "flex flex-col",
    sizes: "w-full",
  };
  return (
    <div>
      {!isHeaderException && <Header />}
      <div className={cn(container)}>
        {!isException && <Dashboard.Menu />}
        <div className={cn(body)}>{children}</div>
      </div>
    </div>
  );
}
