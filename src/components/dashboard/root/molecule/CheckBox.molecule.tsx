import Svg from "@/asset/Svg";
import { DevelopmentType } from "@/interface/Development";
import { OnClick } from "fast-jsx/interface";
import { cn } from "fast-jsx/util";

interface CheckBoxMoleculeProps {
  type: DevelopmentType;
  script: string;
  onClick: OnClick;
}

export default function CheckBoxMolecule(props: CheckBoxMoleculeProps) {
  const container = {
    displays: "flex items-center justify-between",
    sizes: "w-full h-[47px]",
    backgrounds: "bg-[#F6F9FF]",
    boundaries: "px-3 rounded-[10px]",
  };
  return (
    <div className={cn(container)}>
      <div className="flex items-center">
        <div>{props.type}</div>
        <div>{props.script}</div>
      </div>
      <Svg.Direciton.Right />
    </div>
  );
}
