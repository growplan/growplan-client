import Svg from "@/asset/Svg";
import useChild from "@/hook/useChild";
import { cn } from "fast-jsx/util";

export default function Notice() {
  const { store } = useChild();
  const { child } = store;
  const container = {
    displays: "flex justify-center items-center gap-x-3",
    sizes: "w-full max-w-[353px] h-12",
    backgrounds: "bg-blue-2",
    boundaries: "rounded-[10px]",
  };
  return (
    <div className={cn(container)}>
      <Svg.Icon.Writing />
      <div className="text-blue-5 font-bold">
        {child?.name}님의 발달 상태를 기록해보세요!
      </div>
    </div>
  );
}
