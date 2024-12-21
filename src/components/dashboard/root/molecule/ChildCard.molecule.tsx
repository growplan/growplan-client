import { cn } from "fast-jsx/util";
import { Child } from "@/interface/Child";
import { calculateMonthsSince } from "@/util/calculate";
import Svg from "@/asset/Svg";
import useChild from "@/hook/useChild";

export default function ChildCard(props: Child) {
  const { name, birthdate, gender } = props;
  const { setSelectedChild } = useChild();
  const container = {
    displays: "flex items-center gap-x-[26px]",
    sizes: "w-[353px] h-[139px]",
    boundaries: "rounded-[10px]",
    backgrounds: "bg-blue-3",
    paddings: "px-6 py-5",
  };
  return (
    <div className={cn(container)} onClick={() => setSelectedChild(props)}>
      <div className="flex flex-col w-[156px] leading-tight">
        <div className="text-xl font-bold">{name} 어린이</div>
        <div className="flex mt-1 items-center gap-x-[10.75px]">
          <div>{calculateMonthsSince(props.birthdate)}개월생</div>
          {gender === "남자" ? <Svg.Icon.Male /> : <Svg.Icon.Female />}
        </div>
        <div className="mt-4">{birthdate}</div>
      </div>
      <img
        src="/images/dashboard/character-blue.png"
        alt="character"
        width={139}
        height={139}
      />
    </div>
  );
}
