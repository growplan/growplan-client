import { cn } from "fast-jsx/util";
export default function RecordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const container = {
    positions: "relative z-0",
    paddings: "pt-[68px]",
    displays: "flex flex-col",
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
