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
    "/dashboard/mypage",
  ];
  const exceptions = [
    "/dashboard/records/post",
    "/dashboard/mypage/create-child",
    "/dashboard/mypage/create-child/success",
  ];
  const isHeaderException = [...headerExceptions, ...exceptions].some((path) =>
    matchPath({ path }, location.pathname)
  );
  const isException = exceptions.some((path) =>
    matchPath({ path }, location.pathname)
  );
  const container = {
    displays: "flex flex-col gap-x-3.5  items-center",
    backgrounds: "bg-[#FAFCFF]",
    sizes: "w-full min-h-screen",
    styles: "scrollbar-hidden",
  };
  const body = {
    displays: "flex flex-col ",
  };
  return (
    <div>
      {!isHeaderException && <Header />}
      <div className={cn(container)}>
        <div className={cn(body)}>{children}</div>
        {!isException && <Dashboard.Menu />}
      </div>
    </div>
  );
}
