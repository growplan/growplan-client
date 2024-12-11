import { cn } from "fast-jsx/util";

export default function CreateScript() {
  const container = {
    sizes: "w-full",
    displays: "flex flex-col",
  };
  return (
    <div className={cn(container)}>
      <div className="flex gap-x-1">
        <div className="text-lg text-blue-5">*</div>
        <div className="text-lg font-bold">
          아이의 발달과 관련한 사항을 자세히 남겨주세요.
        </div>
      </div>
    </div>
  );
}
