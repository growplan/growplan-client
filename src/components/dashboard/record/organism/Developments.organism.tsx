import { cn } from "fast-jsx/util";
import { contents } from "./Content";
import { State } from "fast-jsx/interface";
import { DevelopmentType } from "@/interface/Development";

export default function Developments({
  state,
}: {
  state: State<DevelopmentType | undefined>;
}) {
  const [value, setValue] = state;
  const container = {
    displays: "flex justify-between ",
    sizes: "w-screen max-w-[480px] h-10",
    boundaries: "px-3",
  };
  return (
    <div className={cn(container)}>
      {contents.map((content) => (
        <button
          key={content.type}
          onClick={() => {
            if (content.type === "all") return setValue(undefined);
            return setValue(content.type);
          }}
        >
          {content.title}
        </button>
      ))}
    </div>
  );
}
