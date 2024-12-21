import { surveys } from "@/asset/development";
import Card from "@/design/Card";
import TitleBox from "@/design/TitleBox";
import { cn } from "fast-jsx/util";
import CheckBoxMolecule from "../molecule/CheckBox.molecule";
import { useNavigate } from "react-router-dom";
import useChild from "@/hook/useChild";
import useDevelopment from "@/hook/useDevelopment";
import { calculateMonthsSince, calculateWeeksSince } from "@/util/calculate";

export default function CheckList() {
  const { nowChild } = useChild();
  const { developmentInfo } = useDevelopment();
  const router = useNavigate();
  const body = {
    displays: "flex flex-col gap-y-2",
    sizes: "w-full",
    boundareis: "px-[26px] mt-[24px] pb-[28px]",
  };

  return (
    <>
      {nowChild && (
        <Card>
          <TitleBox
            subtitle={`보통의 ${calculateMonthsSince(
              nowChild?.birthdate
            )}개월생은?`}
            title={`${calculateMonthsSince(
              nowChild?.birthdate
            )}개월된 아이는 이렇게 행동해요!`}
            descriptions={["하단의 내용은 매일 자정마다 자동 새로고침 됩니다."]}
          />
          <div className={cn(body)}>
            {developmentInfo?.surveyTitles.map((survey) => (
              <CheckBoxMolecule
                key={survey.developmentType}
                type={survey.developmentType}
                script={survey.title}
                onClick={() => router(`/surveys/${survey.developmentType}`)}
              />
            ))}
          </div>
        </Card>
      )}
    </>
  );
}
