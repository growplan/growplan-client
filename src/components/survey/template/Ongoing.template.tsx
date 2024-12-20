import { cn } from "fast-jsx/util";
import ButtonContainerMolecule from "../molecule/ButtonContainer.molecule";
import Card from "@/design/Card";
import { checks } from "../check";
import Svg from "@/asset/Svg";
import { OnClick } from "fast-jsx/interface";
import { useState } from "react";
import { useActionStore } from "fast-jsx/store";
import { useParams } from "react-router-dom";
import { useSurvey, useSurveyCheck } from "@/hook/useSurvey";
import { DevelopmentType } from "@/interface/Development";
import { Action } from "fast-jsx";
import Loading from "@/design/Loading";

export default function Ongoing() {
  const { surveyType } = useParams();
  const { clearView, setView } = useActionStore();
  const [now, setNow] = useState<number>(0);
  const [check, setCheck] = useState<number>();
  const { surveys, isLoading } = useSurvey(surveyType as DevelopmentType);
  const { createTempSurvey } = useSurveyCheck();
  const container = {
    displays: "flex flex-col items-center",
    paddings: "pt-12",
    sizes: "w-full h-full",
  };
  return (
    <div className={cn(container)}>
      <Action.Replace actions={[[isLoading, <Loading />]]}>
        {surveys && (
          <>
            <Card
              option={{
                pressure: "px-5 py-7",
                gap: "gap-y-12",
              }}
            >
              <Numbering now={now + 1} total={surveys.length} />
              <div className="text-lg font-bold">{surveys[now].script}</div>
              <div className="flex flex-col w-full gap-y-2">
                {checks.map(({ point, script }, index) => (
                  <Checking
                    key={point}
                    index={index + 1}
                    script={script}
                    isChecked={check === point}
                    onClick={() => setCheck(point)}
                  />
                ))}
              </div>
            </Card>
            <ButtonContainerMolecule
              title={now !== surveys.length - 1 ? "다음으로" : "제출하기"}
              onClick={() => {
                if (typeof check === "undefined") return;
                if (now === surveys.length - 1) {
                  clearView();
                  setView("submit");
                }
                setNow(now + 1);
                createTempSurvey({
                  id: surveys[now].surveyId,
                  script: surveys[now].script,
                  status: check,
                });
                setCheck(undefined);
              }}
              isClickable={typeof check !== "undefined"}
            />
          </>
        )}
      </Action.Replace>
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
  index,
  script,
  isChecked,
  onClick,
}: {
  index: number;
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
    borders: isChecked ? "border-blue-5" : "border-blue-1",
  };
  return (
    <div onClick={onClick} className={cn(container)}>
      <div className="text-[14px] font-bold">{[index, script].join(". ")}</div>
      <Svg.Icon.Check isChecked={isChecked} />
    </div>
  );
}
