import analysis, { Status } from "@/asset/analysis";
import Svg from "@/asset/Svg";
import { Development } from "@/interface/Development";
import { cn } from "fast-jsx/util";

export default function ResultAnalysis({ result }: { result: Development }) {
  const container = {
    displays: "flex flex-col items-center",
    paddings: "pt-[58px]",
  };
  const statusString = result.isRisk ? "낮은 수치" : "높은 수치";
  return (
    <div className={cn(container)}>
      <div className="flex font-bold">
        <div className="text-blue-5">{result.score}점</div>
        <div>으로 {statusString}를 보이고 있어요</div>
      </div>
      <div className="text-sm">{statusString}가 계속되면...</div>
      <div className="flex flex-col mt-8 gap-y-5">
        {analysis[result.isRisk ? "bad" : "good"][result.developmentType].map(
          (analysis) => (
            <Analysis
              key={analysis.id}
              script={analysis.script}
              isRisk={result.isRisk}
            />
          )
        )}
      </div>
    </div>
  );
}
function Analysis({ isRisk, script }: { script: string; isRisk: boolean }) {
  const container = {
    displays: "flex items-center gap-x-5",
    sizes: "w-[353px] h-[54px]",
  };
  const iconBox = {
    displays: "flex items-center justify-center",
    sizes: "w-[54px] h-[54px]",
    backgrounds: !isRisk ? "bg-blue-2" : "bg-black-3",
    boundaries: "rounded-full",
  };
  return (
    <div className={cn(container)}>
      <div className={cn(iconBox)}>
        {isRisk ? <Svg.Icon.Bad /> : <Svg.Icon.Good />}
      </div>
      <div className="text-sm w-[279px]">{script}</div>
    </div>
  );
}
