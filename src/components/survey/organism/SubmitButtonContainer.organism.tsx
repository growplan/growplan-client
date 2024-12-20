import { userApi } from "@/connection";
import useChild from "@/hook/useChild";
import useSign from "@/hook/useSign";
import { TempSurvey, useSurveyCheck } from "@/hook/useSurvey";
import { Button } from "fast-jsx";
import { cn } from "fast-jsx/util";
import { useMutation } from "react-query";
import { useNavigate, useParams } from "react-router-dom";

export default function SubmitButtonContainer() {
  const { surveyType } = useParams();
  const router = useNavigate();
  const { sign } = useSign();
  const { nowChild } = useChild();
  const { tempSurveys } = useSurveyCheck();
  const { mutate: submit } = useMutation({
    mutationFn: ({
      userId,
      childId,
      tempSurveys,
    }: {
      userId: number;
      childId: number;
      tempSurveys: TempSurvey[];
    }) =>
      userApi.child.survey.post({
        userId,
        childId,
        surveys: tempSurveys.map((tempSurvey) => ({
          id: tempSurvey.id,
          status: tempSurvey.status,
        })),
      }),
    onSuccess: () => {
      router(`/surveys/${surveyType}/result`);
    },
  });
  const container = {
    fixed: "fixed bottom-0 left-0",
    displays: "flex gap-x-[5px]",
    sizes: "w-full h-[60px]",
    pressures: "px-[20px]",
    backgrounds: "bg-white",
  };
  return (
    <>
      <div className={cn(container)}>
        <Button
          title="답변 수정하기"
          onClick={() => window.location.reload()}
          option={{
            background: "bg-black-2",
            textColor: "text-black-6",
            boundary: "rounded-[8px]",
            width: "w-full",
            height: "h-full",
            font: "text-lg font-bold",
          }}
        />
        <Button
          title="결과 확인하기"
          onClick={() => {
            if (!sign || !nowChild) return alert("다시 시도해주세요.");
            submit({ userId: sign.id, childId: nowChild.id, tempSurveys });
          }}
          option={{
            background: "bg-blue-5",
            textColor: "text-white",
            boundary: "rounded-[8px]",
            width: "w-full",
            height: "h-full",
            font: "text-lg font-bold",
          }}
        />
      </div>
      <div className="w-full h-[80px]" />
    </>
  );
}
