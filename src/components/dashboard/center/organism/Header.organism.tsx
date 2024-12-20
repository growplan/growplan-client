import { cn } from "fast-jsx/util";

export default function Header() {
  const container = {
    positions: "fixed top-0 left-0",
    displays: "flex",
    borders: "border-b-1 border-black-3",
    sizes: "h-[84px] w-full",
    backgrounds: "bg-white",
  };
  return (
    <>
      <div className={cn(container)}></div>
      <div className="h-[84px]" />
    </>
  );
}
