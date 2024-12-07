import HeaderDetail from "@/design/HeaderDetail";
import { cn } from "fast-jsx/util";

export default function RecordPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const container = {
    positions: "relative",
    displays: "flex flex-col",
    boundaries: "pt-[68px]",
    sizes: "w-full min-h-screen ",
  };
  const body = {
    displays: "flex flex-col flex-grow items-center justify-center",
  };
  return (
    <div className={cn(container)}>
      <HeaderDetail title="작업필요" />
      <div className={cn(body)}>{children}</div>
    </div>
  );
}
