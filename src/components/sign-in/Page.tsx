import auth from "@/config/auth";
import { Button, LineBreaks } from "fast-jsx";
import { cn } from "fast-jsx/util";

const auths = [
  {
    title: "카카오로 로그인",
    onClick: () => (window.location.href = auth.kakao),
    background: "bg-kakao-yellow",
    textColor: "text-kakao-brown",
  },
  {
    title: "네이버로 로그인",
    onClick: () => (window.location.href = auth.naver),
    background: "bg-naver-green",
    textColor: "text-white",
  },
];

export default function SignInPage() {
  const container = {
    displays: "flex items-center justify-center",
    sizes: "w-full min-h-screen",
  };
  const body = {
    displays: "flex flex-col",
    sizes: "w-full max-w-[393px] min-h-screen",
    boundaries: "px-5 pb-4",
  };
  return (
    <div className={cn(container)}>
      <div className={cn(body)}>
        <div className="h-full flex flex-grow items-center">
          <div className="flex flex-col gap-y-9 items-center w-full">
            <img src="/images/logos/growplan-symbol.png" width={93.89} />
            <LineBreaks
              texts={["서비스를 이용하려면", "로그인이 필요해요!"]}
              className="text-[20px] text-center font-bold"
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-2 w-full mt-auto">
          {auths.map(({ title, onClick, background, textColor }) => (
            <Button
              key={title}
              title={title}
              onClick={onClick}
              option={{
                width: "w-full",
                height: "h-[60px]",
                background,
                textColor,
                font: "text-[16px]",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}