import Svg from "@/asset/Svg";
import {
  DevelopmentType,
  developmentTypeString,
} from "@/interface/Development";
import { Label } from "fast-jsx";
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
      <div className="flex items-center gap-x-2">
        <Label
          title={developmentTypeString[props.type]}
          option={{
            width: "w-[50px]",
            height: "h-[23px]",
            background: "bg-blue-5",
          }}
        />
        <div className="text-[14px]">{props.script}</div>
      </div>
      <Svg.Direciton.Right onClick={props.onClick} />
    </div>
  );
}
