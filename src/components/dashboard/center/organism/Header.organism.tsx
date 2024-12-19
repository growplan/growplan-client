import { cn } from "fast-jsx/util";

export default function Header() {
  const container = {
    displays: "flex",
    borders: "border-b-1 border-black-3",
    sizes: "h-[84px] w-full",
    backgrounds: "bg-white",
  };
  return <div className={cn(container)}></div>;
}
