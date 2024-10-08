import { cn } from "fast-jsx/util";

export default function GrowPlanPage() {
  const container = {
    displays:
      "flex flex-col gap-y-32 lg:flex-row justify-center lg:justify-between items-center",
    sizes: "w-full",
    boundareis: "pt-32 lg:pl-16 lg:pr-12",
  };
  return (
    <div className={cn(container)}>
      <div className="flex flex-col items-center image-container">
        <img src="/images/logos/growplan.png" width={200} />
        <div>발달지연 아동을 위한 스마트 트래킹 서비스</div>
      </div>
      <img src="/images/home/sample.png" width={600} />
    </div>
  );
}
