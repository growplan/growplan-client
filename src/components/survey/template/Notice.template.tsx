import { LineBreaks } from "fast-jsx";
import { cn } from "fast-jsx/util";
import { useActionStore } from "fast-jsx/store";
import CheckListMenual from "../molecule/CheckListMenual.molecule";
import ButtonContainerMolecule from "../molecule/ButtonContainer.molecule";
import { useParams } from "react-router-dom";
import {
  DevelopmentType,
  developmentTypeString,
} from "@/interface/Development";

export default function NoticeOrganism() {
  const { surveyType } = useParams<{ surveyType: DevelopmentType }>();
  const { setView } = useActionStore();
  const container = {
    displays: "flex flex-col items-center",
    paddings: "pt-12",
  };
  return (
    <div className={cn(container)}>
      <LineBreaks
        texts={[
          `${developmentTypeString[surveyType as DevelopmentType]} 발달척도를`,
          "진단합니다.",
        ]}
        className="text-blue-5 text-lg font-bold text-center"
      />
      <img src="/images/survey/message.png" width={146.65} />
      <CheckListMenual />
      <ButtonContainerMolecule
        title="시작하기"
        isClickable={true}
        onClick={() => setView("ongoing")}
      />
    </div>
  );
}
