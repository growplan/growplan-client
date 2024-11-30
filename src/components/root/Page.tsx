import { Button } from "fast-jsx";
import { cn } from "fast-jsx/util";
import { useNavigate } from "react-router-dom";

export default function RootPage() {
  const router = useNavigate();
  const container = {
    displays:
      "flex flex-col gap-y-32 lg:flex-row justify-center lg:justify-between items-center",
    sizes: "w-full",
    boundareis: "pt-32 lg:pl-16 lg:pr-12",
  };

  return (
    <div className={cn(container)}>
      <div className="flex flex-col gap-y-3.5 items-center image-container">
        <img src="/images/logos/growplan.png" width={200} />
        <div>발달지연 아동을 위한 스마트 트래킹 서비스</div>
        <Button
          title="시작하기"
          onClick={() => router("/sign-in")}
          option={{
            background: "bg-blue-5",
            width: "w-24",
            height: "h-8",
            font: "text-[12px]",
          }}
        />
      </div>
      <img src="/images/home/sample.png" width={600} />
    </div>
  );
}
