import { LineBreaks } from "fast-jsx";
import { cn } from "fast-jsx/util";
import CheckListMenual from "../molecule/CheckListMenual.molecule";

export default function NoticeOrganism() {
  const container = {
    displays: "flex flex-col items-center",
    paddings: "pt-12",
  };
  return (
    <div className={cn(container)}>
      <LineBreaks
        texts={["아이가 그려진 점선을 따라", "그리지 못하나요?"]}
        className="text-blue-5 text-lg font-bold text-center"
      />
      <img src="/images/survey/message.png" width={146.65} />
      <CheckListMenual />
    </div>
  );
}
