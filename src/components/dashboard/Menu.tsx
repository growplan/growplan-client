import { cn } from "fast-jsx/util";
import { useLocation, useNavigate } from "react-router-dom";

export default function Menu() {
  const router = useNavigate();
  const location = useLocation();

  const routes = [
    {
      title: "홈",
      href: "/dashboard",
    },
    {
      title: "기록",
      href: "/dashboard/records",
    },
    {
      title: "센터",
      href: "/dashboard/centers",
    },
    {
      title: "마이",
      href: "/dashboard/config",
    },
  ];
  const container = {
    positions: "fixed bottom-0 left-0 md:static",
    displays: "flex md:flex-col gap-y-0.5",
    backgrounds: "bg-white",
    sizes: "w-full md:w-[16%] min-w-32",
  };
  const button = (isSelected: boolean) => ({
    displays: "flex justify-start",
    sizes: "w-full md:w-auto",
    boundaries: "pl-3.5 py-1.5 rounded-md",
    backgrounds: isSelected ? "bg-[#4163f6]" : "hover:bg-[#4163f6]/10",
    texts: isSelected ? "text-white" : "text-[#4163f6]",
    animations: "duration-500",
  });
  return (
    <div className={cn(container)}>
      {routes.map(({ title, href }) => (
        <button
          onClick={() => {
            router(href);
          }}
          className={cn(button(location.pathname === href))}
        >
          {title}
        </button>
      ))}
    </div>
  );
}
