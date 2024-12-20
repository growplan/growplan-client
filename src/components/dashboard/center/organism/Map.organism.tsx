import { cn } from "fast-jsx/util";

export default function Map() {
  const container = {
    positions: "fixed top-[84px] left-0",
    sizes: "w-[393px] h-[200px]",
  };
  return (
    <>
      <div className={cn(container)}></div>
      <div className="h-[200px]" />
    </>
  );
}
