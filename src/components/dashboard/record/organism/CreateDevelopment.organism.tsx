import { cn } from "fast-jsx/util";
import { Content, contents } from "./Content";
import { Button } from "fast-jsx";
import { State } from "fast-jsx/interface";
import { DevelopmentType } from "@/interface/Development";

interface CreateDevelopmentProps {
  state: State<DevelopmentType[]>;
}

export default function CreateDevelopment({ state }: CreateDevelopmentProps) {
  const [developments, setDevelopments] = state;
  const container = {
    displays: "flex flex-col gap-y-4",
    sizes: "w-full",
  };
  const validate = (content: Content) =>
    developments.includes(content.type as any) || developments.length === 6;
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
            onClick={() => {
              if (content.type !== "all") {
                if (developments.includes(content.type))
                  return setDevelopments(
                    developments.filter(
                      (development) => development !== content.type
                    )
                  );
                return setDevelopments([...developments, content.type]);
              }
              if (content.type === "all") {
                if (developments.length === 6) return setDevelopments([]);
                return setDevelopments(["CG", "GM", "LG", "LM", "SC", "SH"]);
              }
            }}
            option={{
              width: "w-[66px]",
              height: "h-[24px]",
              boundary: [
                "rounded-full border-2 ",
                validate(content) ? "border-blue-1" : "border-black-3",
              ].join(" "),
              textColor: validate(content) ? "text-blue-5" : "text-black-5",
              background: validate(content) ? "bg-blue-1" : "bg-white",
              font: "text-[14px] font-bold",
            }}
          />
        ))}
      </div>
    </div>
  );
}
