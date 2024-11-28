import { surveys } from "@/asset/development";
import Card from "@/design/Card";
import TitleBox from "@/design/TitleBox";
import { Button } from "fast-jsx";
import { cn } from "fast-jsx/util";

export default function CheckList() {
  const body = {
    displays: "flex flex-col gap-y-1.5",
  };
  const box = {
    displays: "flex ",
    backgrounds: "bg-gray-400",
    fonts: "text-white",
  };
  return (
    <Card>
      <TitleBox
        subtitle={"보통의 39개월생은?"}
        title="39개월된 아이는 이렇게 행동해요!"
        descriptions={["하단의 내용은 매일 자정마다 자동 새로고침 됩니다."]}
      />
      <div className={cn(body)}>
        {surveys.map((survey) => (
          <div className={cn(box)}>{survey.script}</div>
        ))}
      </div>
      <Button title="아이의 발달의 상태 기록하기" onClick={() => {}} />
    </Card>
  );
}
