import { childs } from "@/asset/user";
import { Label } from "fast-jsx";
import { cn } from "fast-jsx/util";

export default function IntroductionMolecule() {
  const child = childs[0];
  const container = {
    sizes: "w-[353px] h-[139px]",
    boundaries: "bg-blue-sky-light rounded-md",
  };
  const titleBox = {
    displays: "flex gap-x-1.5 items-end",
  };
  return (
    <div className="relative overflow-hidden w-full">
      <div className={cn(container)}>
        <Label
          title="N개월차"
          option={{
            width: "w-16",
            background: "bg-gray-500",
          }}
        />
        <div className={cn(titleBox)}>
          <div className="text-2xl">{child.name}</div>
          <div>님의</div>
        </div>
        <div>발달 척도에요</div>
      </div>
    </div>
  );
}
