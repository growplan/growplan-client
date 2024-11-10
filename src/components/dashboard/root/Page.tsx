import { surveys } from "@/asset/development";
import { childs } from "@/asset/user";
import { Button, Label, Shelf } from "fast-jsx";
import Graph from "fast-jsx/graph";
import { cn } from "fast-jsx/util";
import IntroductionMolecule from "./molecule/Introduction.molecule";

export default function DashboardPage() {
  return (
    <Shelf.Col
      option={{
        background: "bg-white",
        display: "gap-y-1.5",
        boundary: "rounded-md",
      }}
    >
      <IntroductionMolecule />
      <Shelf.Col
        option={{
          display: "items-center",
          width: "w-[353px]",
          boundary: "shadow-md rounded-md",
          pressure: "pt-7",
        }}
      >
        <div className="w-[305px] h-[95px]">
          <div>김메디님의 발달 척도에요!</div>
        </div>
        <Graph.Bar
          dataSet={{
            items: [
              ["대근육", 0.8],
              ["소근육", 0.6],
              ["인지", 0.1],
              ["언어", 0.4],
              ["사회", 0.2],
              ["자조", 0.3],
            ],
          }}
          option={{
            width: "w-full",
            height: "h-[218px] ",
            pressure: "px-3.5",
            barStyle: "bg-blue-500 rounded-md",
          }}
        />
        <div className="pt-3 px-3.5 w-full h-[63px]">
          <Label
            title="위험"
            option={{
              width: "w-[44px]",
              background: "bg-red-500",
            }}
          />
        </div>
        <div className="w-full h-[72px] flex justify-center items-center bg-[#EEF4FF] text-[#699BFF]">
          월간 레포트 확인하기
        </div>
      </Shelf.Col>
      <CheckList />
    </Shelf.Col>
  );
}

function CheckList() {
  const body = {
    displays: "flex flex-col gap-y-1.5",
  };
  const box = {
    displays: "flex ",
    backgrounds: "bg-gray-400",
    fonts: "text-white",
  };
  return (
    <Shelf.Col
      option={{
        background: "bg-gray-300",
        pressure: "p-3.5",
      }}
    >
      <div className="text-xl font-bold">현재 N개월 차가 된 아이는</div>
      <div className={cn(body)}>
        {surveys.map((survey) => (
          <div className={cn(box)}>{survey.script}</div>
        ))}
      </div>
      <Button title="아이의 발달의 상태 기록하기" onClick={() => {}} />
    </Shelf.Col>
  );
}
