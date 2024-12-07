import Svg from "@/asset/Svg";
import { cn } from "fast-jsx/util";
import { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface Route {
  title: string;
  href: string;
  icon?: ReactNode;
}
const routes = (path: string): Route[] => {
  const isSelected = (href: string) => path === href;
  return [
    {
      title: "홈",
      href: "/dashboard",
      icon: <Svg.Navi.Home isSelected={isSelected("/dashboard")} />,
    },
    {
      title: "기록",
      href: "/dashboard/records",
      icon: <Svg.Navi.Record isSelected={isSelected("/dashboard/records")} />,
    },
    {
      title: "센터",
      href: "/dashboard/centers",
      icon: <Svg.Navi.Center isSelected={isSelected("/dashboard/centers")} />,
    },
    {
      title: "마이",
      href: "/dashboard/mypage",
      icon: <Svg.Navi.MyPage isSelected={isSelected("/dashboard/mypage")} />,
    },
  ];
};
export default function Menu() {
  const router = useNavigate();
  const location = useLocation();
  const container = {
    positions: "fixed bottom-0 left-0",
    displays: "flex  gap-y-0.5",
    backgrounds: "bg-white",
    sizes: "w-full min-w-32",
    styles: "overflow-hidden rounded-t-xl",
    shadows: "box-shadow",
  };
  const button = (isSelected: boolean) => ({
    displays: "flex flex-col items-center",
    sizes: "w-full",
    animations: "duration-500",
    fonts: "text-[12px]",
    texts: isSelected ? "text-blue-5" : "text-black-4",
    boundaries: "pt-2.5",
  });
  return (
    <div className={cn(container)}>
      {routes(location.pathname).map(({ title, href, icon }) => (
        <button
          key={href}
          onClick={() => {
            router(href);
          }}
          className={cn(button(location.pathname === href))}
        >
          {icon}
          <div>{title}</div>
        </button>
      ))}
    </div>
  );
}
