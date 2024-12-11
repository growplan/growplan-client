import { cn } from "fast-jsx/util";

export default function CreateDevelopment() {
  const container = {
    displays: "flex flex-col",
    sizes: "w-full",
  };
  return (
    <div className={cn(container)}>
      <div className="flex gap-x-1">
        <div className="text-lg text-blue-5">*</div>
        <div className="text-lg font-bold">발달영역</div>
      </div>
    </div>
  );
}
