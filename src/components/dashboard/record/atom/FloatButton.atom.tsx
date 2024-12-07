import Svg from "@/asset/Svg";
import { cn } from "fast-jsx/util";
import { useNavigate } from "react-router-dom";

export default function FloatButton() {
  const router = useNavigate();
  const container = {
    positions: "fixed bottom-[98px] right-3",
    displays: "flex flex-col justify-center items-center",
    sizes: "w-16 h-16",
    rounds: "rounded-full",
    backgrounds: "bg-black",
  };
  return (
    <button
      onClick={() => router("/dashboard/records/post")}
      className={cn(container)}
    >
      <Svg.Icon.Writing />
      <div className="text-[14px] text-blue-5">기록</div>
    </button>
  );
}
