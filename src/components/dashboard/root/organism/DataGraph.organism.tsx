import Card from "@/design/Card";
import TitleBox from "@/design/TitleBox";
import useChild from "@/hook/useChild";
import useDevelopment from "@/hook/useDevelopment";
import {
  DevelopmentType,
  developmentTypeString,
} from "@/interface/Development";
import Graph from "fast-jsx/graph";
import moment from "moment-timezone";
import { useNavigate } from "react-router-dom";
const devs: DevelopmentType[] = ["GM", "SH", "CG", "LG", "SC", "LM"];

export default function DataGraph() {
  const router = useNavigate();
  const { nowChild } = useChild();
  const { developmentInfo } = useDevelopment();
  const now = moment().format("YYYY년 MM월 DD일");

  return (
    <>
      {nowChild && (
        <Card>
          <TitleBox
            subtitle={[now, "기준"].join(" ")}
            title={`${nowChild.name}님의 발달척도예요!`}
            descriptions={[
              "상위 75%는 정상군, 상위 25~50%는 경계군,",
              "하위 25%는 위험군으로 분류돼요.",
            ]}
          />
          <Graph.Bar
            dataSet={{
              items: devs.map((dev) => [
                developmentTypeString[dev],
                +(
                  (developmentInfo?.developments.find(
                    ({ developmentType }) => developmentType === dev
                  )?.score ?? 0) / 24
                ).toFixed(2),
              ]),
            }}
            option={{
              width: "w-full",
              height: "h-[218px]",
              pressure: "px-3.5",
              barStyle:
                "w-[44px] bg-gradient-to-t to-[#699BFF] from-[#EEF4FF] rounded-md",
            }}
          />
          <div className="pt-3 px-3.5 w-full h-[63px]">
            {/* <Label
          title="위험"
          option={{
            width: "w-[44px]",
            background: "bg-red-500",
          }}
        /> */}
          </div>
          <button
            onClick={() => router("/reports")}
            className="w-full h-[72px] flex justify-center items-center bg-[#EEF4FF] text-[#699BFF]"
          >
            월간 레포트 확인하기
          </button>
        </Card>
      )}
    </>
  );
}
