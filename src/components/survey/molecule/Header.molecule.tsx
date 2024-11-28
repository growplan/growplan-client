import Svg from "@/asset/Svg";
import {
  DevelopmentType,
  developmentTypeString,
} from "@/interface/Development";
import { cn } from "fast-jsx/util";
import { useParams } from "react-router-dom";

export default function HeaderMolecule() {
  const { surveyType } = useParams();
  const container = {
    positions: "relative",
    displays: "flex justify-center items-center",
    sizes: "h-[68px]",
    backgrounds: "bg-white",
  };
  return (
    <div className="fixed top-0 left-0 w-full">
      <div className={cn(container)}>
        <Svg.Direciton.Left
          onClick={() => window.history.back()}
          className="absolute left-5"
        />
        <div>
          {developmentTypeString[surveyType as DevelopmentType]} 체크리스트
        </div>
      </div>
    </div>
  );
}
