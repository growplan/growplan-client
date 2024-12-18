import { ReactNode } from "react";
import { cn } from "fast-jsx/util";
import { Header } from "../../design/Header";
import Dashboard from ".";
import { matchPath, useLocation } from "react-router-dom";

export default function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const headerExceptions = [
    "/dashboard/records/:recordId",
    "/dashboard/centers",
  ];
  const exceptions = ["/dashboard/records/post"];
  const isHeaderException = [...headerExceptions, ...exceptions].some((path) =>
    matchPath({ path }, location.pathname)
  );
  const isException = exceptions.some((path) =>
    matchPath({ path }, location.pathname)
  );
  const container = {
    displays: "flex gap-x-3.5 justify-center items-center",
    backgrounds: "bg-[#FAFCFF]",
    boundaries: " pb-[156px]",
  };
  const body = {
    displays: "flex flex-col ",
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
