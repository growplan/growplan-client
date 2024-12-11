import { cn } from "fast-jsx/util";
import { contents } from "./Content";
import { Button } from "fast-jsx";

export default function CreateDevelopment() {
  const container = {
    displays: "flex flex-col gap-y-4",
    sizes: "w-full",
  };
  return (
    <div className={cn(container)}>
      <div className="flex gap-x-1">
        <div className="text-lg text-blue-5">*</div>
        <div className="text-lg font-bold">발달영역</div>
      </div>
      <div className="flex flex-wrap gap-x-2 gap-y-3">
        {contents.map((content) => (
          <Button
            key={content.type}
            title={content.title}
            onClick={() => {}}
            option={{
              width: "w-[66px]",
              height: "h-[24px]",
              boundary: "rounded-full border-2 border-black-3",
              textColor: "text-black-5",
              background: "bg-white",
              font: "text-[14px] font-bold",
            }}
          />
        ))}
      </div>
    </div>
  );
}
