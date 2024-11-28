import Card from "@/design/Card";
import TitleBox from "@/design/TitleBox";
import { Label } from "fast-jsx";
import Graph from "fast-jsx/graph";
import moment from "moment-timezone";

export default function DataGraph() {
  const now = moment().format("YYYY년 MM월 DD일");
  return (
    <Card>
      <TitleBox
        subtitle={[now, "기준"].join(" ")}
        title="김메디님의 발달척도예요!"
        descriptions={[
          "상위 75%는 정상군, 상위 25~50%는 경계군,",
          "하위 25%는 위험군으로 분류돼요.",
        ]}
      />
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
          height: "h-[218px]",
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
    </Card>
  );
}
