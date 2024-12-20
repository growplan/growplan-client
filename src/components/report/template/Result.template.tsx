import Svg from "@/asset/Svg";
import HeaderDetail from "@/design/HeaderDetail";
import Loading from "@/design/Loading";
import useChild from "@/hook/useChild";
import useDevelopment from "@/hook/useDevelopment";
import useReport from "@/hook/useReport";
import {
  DevelopmentType,
  developmentTypeString,
} from "@/interface/Development";
import { Action, Button } from "fast-jsx";
import { cn } from "fast-jsx/util";
import moment from "moment-timezone";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from "recharts";

const devs: DevelopmentType[] = ["GM", "SH", "CG", "LG", "SC", "LM"];
export default function ResultTemplate() {
  const router = useNavigate();
  const [selectedType, setSelectedType] = useState<DevelopmentType>("GM");
  const { nowChild } = useChild();
  const container = {
    displays: "flex flex-col items-center",
    sizes: "w-full min-h-screen",
    boundaries: "px-5",
  };
  const { developmentInfo, isLoading } = useDevelopment();
  const { report, isLoading: isLoadingReport } = useReport(
    selectedType,
    !developmentInfo?.developments.find(
      (d) => d.developmentType === selectedType
    )
  );
  const nowMonth = moment().format("MM");
  return (
    <Action.Replace
      actions={[[!developmentInfo || isLoading, <Loading.Screen />]]}
    >
      {developmentInfo && (
        <div className={cn(container)}>
          <HeaderDetail title="발달 레포트" />
          <div className="mt-[14px] flex justify-center gap-x-[5px] items-center w-full h-12 bg-blue-2 rounded-[10px]">
            <Svg.Icon.Graph />
            <div className="text-blue-5">
              {[
                `${nowChild?.name}님의`,
                nowMonth,
                "월 발달 레포트 결과예요.",
              ].join(" ")}
            </div>
          </div>
          <div className="mt-[32px]">
            <Chart
              dataSets={devs.map((dev) => ({
                subject: developmentTypeString[dev],
                value:
                  developmentInfo.developments.find(
                    (d) => d.developmentType === dev
                  )?.score ?? 0,
                fullMark: 24,
              }))}
            />
          </div>
          <div className="flex w-full">
            {devs.map((dev) => (
              <button
                className={cn(
                  "text-sm flex items-center justify-center leading-none w-full flex-1 h-[32px] rounded-t-md",
                  selectedType === dev
                    ? "bg-blue-2 text-black"
                    : "bg-transparent text-black-4"
                )}
                onClick={() => setSelectedType(dev)}
              >
                {developmentTypeString[dev]}
              </button>
            ))}
          </div>
          <div className="text-xs p-3 bg-blue-2 w-full h-[136px] overflow-y-scroll rounded-b-md">
            {!developmentInfo?.developments.find(
              (d) => d.developmentType === selectedType
            )
              ? `아직 ${developmentTypeString[selectedType]} 발달에 대한 정보가 없어요.`
              : isLoadingReport
              ? "정보를 가져옵니다..."
              : report?.summary}
          </div>
          <div className="mt-5 w-full">
            <Button
              title={nowMonth + "월 체크리스트 확인하기"}
              onClick={() => router("/dashboard")}
              option={{
                background: "bg-black",
                textColor: "text-blue-5",
                font: "text-lg",
                width: "w-full",
                height: "h-[60px]",
              }}
            />
          </div>
        </div>
      )}
    </Action.Replace>
  );
}
interface DataSet {
  subject: string;
  value: number;
  fullMark: number;
}
function Chart({ dataSets }: { dataSets: DataSet[] }) {
  return (
    <RadarChart outerRadius={90} width={255} height={255} data={dataSets}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis angle={30} domain={[0, 24]} />
      <Radar
        dataKey="value"
        stroke="#699BFF"
        fill="#699BFF"
        fillOpacity={0.4}
      />
    </RadarChart>
  );
}
