import { cn } from "fast-jsx/util";

export default function CreateImage() {
  const container = {
    displays: "flex flex-col",
    sizes: "w-full",
  };
  return (
    <div className={cn(container)}>
      <div className="flex items-center gap-x-1">
        <div className="text-lg font-bold">사진/영상 추가</div>
        <div className="text-sm text-black-5">(최대 6개까지)</div>
      </div>
    </div>
  );
}
