import Svg from "@/asset/Svg";
import { cn } from "fast-jsx/util";
import { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface Route {
  title: string;
  href: string;
  icon?: ReactNode;
}
const routes: Route[] = [
  {
    title: "홈",
    href: "/dashboard",
    icon: <Svg.Icon.Home />,
  },
  {
    title: "기록",
    href: "/dashboard/records",
    icon: <Svg.Icon.Record />,
  },
  {
    title: "센터",
    href: "/dashboard/centers",
    icon: <Svg.Icon.Center />,
  },
  {
    title: "마이",
    href: "/dashboard/config",
    icon: <Svg.Icon.MyPage />,
  },
];
export default function Menu() {
  const router = useNavigate();
  const location = useLocation();
  const container = {
    positions: "fixed bottom-0 left-0 md:static",
    displays: "flex md:flex-col gap-y-0.5",
    backgrounds: "bg-white",
    sizes: "w-full md:w-[16%] min-w-32 h-[96px]",
    styles: "overflow-hidden rounded-t-xl",
  };
  const button = (isSelected: boolean) => ({
    displays: "flex flex-col items-center",
    sizes: "w-full md:w-auto",
    animations: "duration-500",
    fonts: "text-[12px]",
    texts: isSelected ? "text-blue-5" : "text-black-4",
    boundaries: "pt-2.5",
  });
  return (
    <div className={cn(container)}>
      {routes.map(({ title, href, icon }) => (
        <button
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
