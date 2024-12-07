import { cn } from "fast-jsx/util";
import { Outlet } from "react-router-dom";
import { Header } from "@/design/Header";

export default function RootLayout() {
  const container = {
    displays: "flex flex-col ",
    sizes: "w-full min-h-screen",
    fonts: "font-pretendard-var antialiased",
    styles: "scrollbar-hidden",
  };

  return (
    <div className={cn(container)}>
      <Header />
      <Outlet />
    </div>
  );
}
