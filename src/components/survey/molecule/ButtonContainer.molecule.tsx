import { Button } from "fast-jsx";
import { cn } from "fast-jsx/util";

export default function ButtonContainerMolecule() {
  const container = {
    positions: "fixed bottom-0 left-0",
    displays: "flex items-center",
    sizes: "h-[78px] w-full",
    backgrounds: "bg-white",
    paddings: "px-5",
  };
  return (
    <div className={cn(container)}>
      <Button
        title="시작하기"
        onClick={() => console.log("시작하기")}
        option={{
          width: "w-full",
          height: "h-[60px]",
          background: "bg-blue-5",
          font: "text-lg",
        }}
      />
    </div>
  );
}
