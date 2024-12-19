import { cn } from "fast-jsx/util";

export default function CentersOrganism() {
  const container = {
    displays: "flex flex-col",
    pressures: "pt-5 pl-5",
    sizes: "h-full min",
    backgrounds: "bg-white",
  };
  return (
    <div className={cn(container)}>
      <h1>Centers</h1>
    </div>
  );
}
