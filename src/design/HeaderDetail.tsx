import Svg from "@/asset/Svg";
import { cn } from "fast-jsx/util";

export default function HeaderDetail({ title }: { title: string }) {
  const container = {
    positions: "relative z-50",
    displays: "flex justify-center items-center",
    sizes: "h-[68px]",
    backgrounds: "bg-white",
  };
  return (
    <>
      <div className="fixed top-0 left-0 w-full">
        <div className={cn(container)}>
          <Svg.Direciton.Left
            onClick={() => window.history.back()}
            className="absolute left-5"
          />
          <div className="font-bold">{title}</div>
        </div>
      </div>
      <div className="w-full h-[68px]" />
    </>
  );
}
