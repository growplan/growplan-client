import { Button } from "fast-jsx";
import { useActionStore } from "fast-jsx/store";
import { cn } from "fast-jsx/util";

export default function Opening() {
  const { setView } = useActionStore();
  const container = {
    positions: "relative",
    displays: "flex flex-col  justify-center items-center",
    sizes: "w-screen min-h-screen",
    backgrounds: "bg-report-background bg-cover",
  };
  return (
    <div className={cn(container)}>
      <>
        <img
          src="/images/logos/growplan.png"
          alt="growplan"
          width={120.5}
          height={26.86}
          className="absolute top-5 left-5"
        />
        <div className="h-5" />
      </>
      <div className="flex flex-col items-center">
        <img src="/images/report/graph.png" alt="graph" />
        <div className="mt-[38px] text-blue-5 text-sm">발달 레포트</div>
        <div className="mt-2.5 flex flex-col items-center font-bold text-lg">
          <div>매달 확인 가능한</div>
          <div>월간 레포트</div>
        </div>
      </div>
      <>
        <div className="px-5 absolute flex flex-col gap-y-2 items-center bottom-0 left-0 h-20 w-full">
          <Button
            title="레포트 확인하기"
            onClick={() => setView("result")}
            option={{
              background: "bg-blue-5",
              textColor: "text-white",
              font: "text-lg",
              width: "w-full",
              height: "h-[60px]",
            }}
          />
          <button
            onClick={() => window.history.back()}
            className="h-8 w-full flex items-center justify-center text-xs"
          >
            돌아가기
          </button>
        </div>
        <div className="w-full h-20" />
      </>
    </div>
  );
}
