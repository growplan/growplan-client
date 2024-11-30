import Card from "@/design/Card";
import { checks } from "../check";
import { cn } from "fast-jsx/util";
import { LineBreaks } from "fast-jsx";

export default function CheckListMenual() {
  return (
    <Card
      option={{
        background: "bg-blue-1",
        boundary: "",
        pressure: "px-3 pb-5",
        gap: "gap-y-4",
      }}
    >
      <div className="font-bold">체크리스트 사용법</div>
      <div className="bg-white/60 w-full rounded-md grid grid-cols-2 gap-x-3.5 py-3.5 px-3">
        {checks.map(({ id, script }) => (
          <CheckButton key={id} script={script} />
        ))}
      </div>
      <Notification />
    </Card>
  );
}

function CheckButton({ script }: { script: string }) {
  return <div className="text-[14px]">{script}</div>;
}

function Notification() {
  const container = {
    sizes: "w-full",
  };
  return (
    <div className={cn(container)}>
      <div className="flex flex-col gap-y-3">
        <LineBreaks
          texts={[
            "아이의 발달 상태를 조금 더 정확하게 파악하기",
            "위한 설문을 진행합니다. 각 질문 항목에 대해",
            "다음 네가지 중 하나를 표기해주세요.",
          ]}
          className="text-center text-[14px]"
        />
        <LineBreaks
          texts={[
            "만약 아이가 질문 속 행동을 할 수 있는지",
            "모르는 경우에는 직접 시켜보고 답해주세요.",
          ]}
          className="text-center text-[13px]"
        />
      </div>
      <div className="border-1 w-full border-blue-4 border-dashed my-7" />
      <div className="flex flex-col gap-y-3">
        <LineBreaks
          texts={[
            "설문 문항들은 '아이가 할 수 있는지'를 평가하는 것입니다.",
            "아이가 행동을 할 수는 있지만 잘하지 않았던 경우,",
            "아래와 같은 예시는 '할 수 있는 편이다'라고 봐야 합니다.",
          ]}
          className="text-center text-[13px]"
        />
        <LineBreaks
          texts={[
            "EX. 아이가 가위질을 충분히 할 수 있는 손기능을 보이지만",
            "가능을 주지 않았다. 블록 쌓기가 가능하지만",
            "집에 해당 장난감이 없거나 그 놀이를 즐겨하지 않았다",
          ]}
          className="text-center text-[13px]"
        />
      </div>
    </div>
  );
}
