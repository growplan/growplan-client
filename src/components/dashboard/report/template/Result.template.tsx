import Svg from "@/asset/Svg";
import HeaderDetail from "@/design/HeaderDetail";
import { cn } from "fast-jsx/util";

export default function ResultTemplate() {
  const container = {
    displays: "flex flex-col",
    boundaries: "px-5",
  };
  return (
    <div className={cn(container)}>
      <HeaderDetail title="발달 레포트" />
      <div className="flex">
        <Svg.Icon.Graph />
      </div>
    </div>
  );
}
