import { Button } from "fast-jsx";
import { cn } from "fast-jsx/util";
import { useNavigate } from "react-router-dom";

export default function CreateChildSuccessPage() {
  const router = useNavigate();
  const container = {
    displays: "flex flex-col items-center",
    sizes: "w-screen min-h-screen",
    backgrounds: "bg-gradient-to-t to-[#BDD3FF] from-[#EEF4FF]",
    paddings: "px-5 pb-5",
  };
  return (
    <div className={cn(container)}>
      <div className="h-[68px] w-full text-xl font-bold flex justify-center items-center">
        아이등록
      </div>
      <div className="mt-[75px] flex flex-col gap-y-[9px] justify-center items-center bg-white w-[289px] h-[371px] rounded-[8px]">
        <div className="text-blue-5 font-bold text-xl">등록 완료</div>
        <img
          src="/images/dashboard/character-blue.png"
          width={187}
          height={187}
        />
      </div>
      <div className="font-bold text-xl flex flex-col items-center gap-1.5 mt-9">
        <div>우리 아이의 발달 상태를</div>
        <div>확인하러 갈까요?</div>
      </div>
      <div className="mt-auto w-full ">
        <Button
          title="시작하기"
          onClick={() => router("/dashboard")}
          option={{
            background: "bg-blue-5",
            textColor: "text-white",
            width: "w-full",
            height: "h-15",
            font: "font-bold text-lg",
          }}
        />
      </div>
    </div>
  );
}
