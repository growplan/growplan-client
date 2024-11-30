import { cn } from "fast-jsx/util";
import ButtonContainerMolecule from "../molecule/ButtonContainer.molecule";
import Card from "@/design/Card";
import { checks } from "../check";
import Svg from "@/asset/Svg";
import { OnClick } from "fast-jsx/interface";
import { useState } from "react";

export default function Ongoing() {
  const [isChecked, setIsChecked] = useState<number>();
  const container = {
    displays: "flex flex-col items-center",
    paddings: "pt-12",
  };
  return (
    <div className={cn(container)}>
      <Card
        option={{
          pressure: "px-5 pb-7",
          gap: "gap-y-12",
        }}
      >
        <Numbering now={1} total={8} />
        <div className="text-lg font-bold">
          그려진 점선을 따라 그릴 수 있다.
        </div>
        <div className="flex flex-col w-full gap-y-2">
          {checks.map(({ point, script }) => (
            <Checking
              key={point}
              script={script}
              isChecked={isChecked === point}
              onClick={() => setIsChecked(point)}
            />
          ))}
        </div>
      </Card>
      <ButtonContainerMolecule title="다음으로" onClick={() => {}} />
    </div>
  );
}
function Numbering({ now, total }: { now: number; total: number }) {
  const container = {
    displays: "flex items-center",
    fonts: "font-bold",
  };
  return (
    <div className={cn(container)}>
      <div className="text-blue-5">{now}</div>
      <div>/</div>
      <div>{total}</div>
    </div>
  );
}

function Checking({
  script,
  isChecked,
  onClick,
}: {
  script: string;
  isChecked: boolean;
  onClick: OnClick;
}) {
  const container = {
    displays: "flex justify-between items-center",
    sizes: "w-full h-[62px]",
    paddings: "px-5 py-4",
    boundaries: "rounded-[10px]",
    backgrounds: "bg-blue-1",
  };
  return (
    <div onClick={onClick} className={cn(container)}>
      <div>{script}</div>
      <Svg.Icon.Check isChecked={isChecked} />
    </div>
  );
}
