import { cn } from "fast-jsx/util";
import { useNavigate } from "react-router-dom";

export default function Contents() {
  const router = useNavigate();
  const container = {
    backgrounds: "bg-white",
    sizes: "w-full",
    displays: "flex flex-col gap-y-10",
    paddings: "pt-8 px-5 pb-12",
  };
  return (
    <div className={cn(container)}>
      <div className="flex flex-col gap-y-9">
        <div>예약 현황 확인하기</div>
        <div>공지사항</div>
        <div>자주 묻는 질문</div>
        <div>문의하기</div>
      </div>
      <div className="flex gap-x-6 justify-center text-black-5">
        <button
          onClick={() => {
            alert("로그아웃 되었습니다.");
            router("/");
          }}
        >
          로그아웃
        </button>
        <button>회원탈퇴</button>
      </div>
    </div>
  );
}
