import { cn } from "fast-jsx/util";
import {
  DevelopmentType,
  developmentTypeString,
} from "@/interface/Development";
import moment from "moment-timezone";
import useChild from "@/hook/useChild";
import { DevelopmentByDevelopmentType } from "@/connection/api/user";

export default function ResultInfo({
  result,
  type,
}: {
  result: DevelopmentByDevelopmentType;
  type: DevelopmentType;
}) {
  const maxScore = 24;
  const { nowChild } = useChild();
  const container = {
    displays: "flex flex-col justify-center items-center",
    sizes: "w-full h-[300px]",
    backgrounds: "bg-gradient-to-b bg-cover",
  };
  const today = moment().format("YYYY년 MM월 DD일");
  return (
    <div className={cn(container)}>
      <div className="text-sm text-blue-5">{today}</div>
      <div className="font-bold">
        {[
          `${nowChild?.name}님의`,
          developmentTypeString[type],
          "영역 결과",
        ].join(" ")}
      </div>
      <img
        src="/images/dashboard/character-blue.png"
        width={129}
        height={129}
        alt="character"
      />
      <div className="flex leading-tignt bg-blue-1 rounded-[5px] text-sm w-[58px] h-[25px] items-center justify-center text-blue-5">
        <div className="font-bold">{result.totalScore}</div>
        <div>/</div>
        <div>{maxScore}</div>
      </div>
    </div>
  );
}
