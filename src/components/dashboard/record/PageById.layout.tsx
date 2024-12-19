import HeaderDetail from "@/design/HeaderDetail";
import { cn } from "fast-jsx/util";
export default function RecordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const container = {
    positions: "relative z",
    displays: "flex flex-col",
    boundaries: "pt-[68px]",
    sizes: "w-full min-h-screen ",
  };
  const body = {
    displays: "flex flex-col flex-grow items-center justify-center",
  };

  return (
    <div className={cn(container)}>
      <div className={cn(body)}>{children}</div>
    </div>
  );
}
