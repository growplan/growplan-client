import { Button } from "fast-jsx";
import { cn } from "fast-jsx/util";
import { useLocation, useNavigate } from "react-router-dom";

export function Header() {
  const container = {
    positions: "fixed top-0 left-0",
    displays: "flex justify-between items-center",
    backgrounds: "bg-white",
    sizes: "w-full h-16",
    boundaries: "px-4",
    styles: "shadow-md",
  };
  const router = useNavigate();
  const location = useLocation();
  const isDashboard = location.pathname === "/dashboard";
  return (
    <div className="relative z-50">
      <div className="h-16" />
      <div className={cn(container)}>
        <img
          src="/images/logos/growplan.png"
          onClick={() => router("/")}
          width={100}
        />
        <Button
          title={isDashboard ? "홈으로" : "대시보드"}
          onClick={() => router(isDashboard ? "/" : "/dashboard")}
          option={{
            background: "bg-[#4163f6]",
          }}
        />
      </div>
    </div>
  );
}
