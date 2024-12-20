import { cn } from "fast-jsx/util";
import HeaderDetail from "@/design/HeaderDetail";
import { useParams } from "react-router-dom";
import {
  DevelopmentType,
  developmentTypeString,
} from "@/interface/Development";

export default function SurveyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { surveyType } = useParams();
  const container = {
    positions: "relative",
    displays: "flex flex-col",
    sizes: "w-full min-h-screen ",
  };
  const body = {
    displays: "flex flex-col flex-grow items-center justify-center",
  };
  return (
    <div className={cn(container)}>
      <HeaderDetail
        title={[
          developmentTypeString[surveyType as DevelopmentType],
          "체크리스트",
        ].join(" ")}
      />
      <div className={cn(body)}>{children}</div>
    </div>
  );
}
