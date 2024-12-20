import { TempSurvey, useSurveyCheck } from "@/hook/useSurvey";
import { cn } from "fast-jsx/util";
import SubmitButtonContainer from "../organism/SubmitButtonContainer.organism";

export default function SubmitTemplate() {
  const { tempSurveys } = useSurveyCheck();
  return (
    <div className="pt-8">
      <div className="flex flex-col items-center">
        <img
          src="/images/survey/warning.png"
          width={32}
          height={32}
          alt="warning"
        />
        <div className="mt-[6px] flex flex-col items-center gap-y-[2px] text-lg text-blue-5 font-bold">
          <div>잠시만요!</div>
          <div>체크 항목에 오류가 없나요?</div>
        </div>
        <div className="text-sm mt-[6px]">
          다시 한 번 확인 후 결과를 받아보세요.
        </div>
      </div>
      <div className="flex flex-col gap-y-3 mt-12">
        {tempSurveys.map((tempSurvey, index) => (
          <Check key={tempSurvey.id} index={index} tempSurvey={tempSurvey} />
        ))}
      </div>
      <SubmitButtonContainer />
    </div>
  );
}

function Check({
  index,
  tempSurvey,
}: {
  index: number;
  tempSurvey: TempSurvey;
}) {
  const container = {
    displays: "flex gap-x-[13px] items-center justify-center",
    backgrounds: "bg-blue-1",
    sizes: "w-[353px] h-[62px]",
    boundaries: "rounded-[10px]",
  };
  return (
    <div className={cn(container)}>
      <div className="truncate w-[270px]">
        {[index + 1, tempSurvey.script].join(". ")}
      </div>
      <div className="text-lg font-bold leading-none bg-white text-blue-5 rounded-full flex justify-center items-center w-[30px] h-[30px]">
        {tempSurvey.status + 1}
      </div>
    </div>
  );
}
