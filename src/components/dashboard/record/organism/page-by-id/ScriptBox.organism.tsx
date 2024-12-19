import { Record } from "@/interface/Record";
import { cn } from "fast-jsx/util";

export default function ScriptBox({ record }: { record: Record }) {
  const container = {
    boundaries: "px-3 py-3.5 rounded-[5px]",
    backgrounds: "bg-blue-1",
    sizes: "w-full min-h-[148px]",
    texts: "text-sm",
  };
  return <div className={cn(container)}>{record.script}</div>;
}
