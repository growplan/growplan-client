import Svg from "@/asset/Svg";
import Card from "@/design/Card";
import {
  DevelopmentType,
  developmentTypeString,
} from "@/interface/Development";
import { Label, LineBreaks } from "fast-jsx";
import { cn } from "fast-jsx/util";
import { useNavigate } from "react-router-dom";

interface RecordProps {
  recordId: number;
  date: string;
  developments: DevelopmentType[];
  imgUrls: string[];
  isLiked: boolean;
  script: string;
}

export default function RecordBox({
  recordId,
  date,
  developments,
  imgUrls,
  isLiked,
  script,
}: RecordProps) {
  const router = useNavigate();
  const container = {
    displays: "flex flex-col gap-y-6",
    sizes: "w-full h-auto",
  };
  return (
    <button onClick={() => router(`/dashboard/records/${recordId}`)}>
      <Card
        option={{
          pressure: "p-4",
        }}
      >
        <div className={cn(container)}>
          <div className="flex justify-between">
            <div className="flex items-center gap-x-1">
              <div className="text-[18px] font-bold">{date}</div>
              <Svg.Icon.Heart isChecked={isLiked} />
            </div>
            <div className="flex gap-x-2 text-[12px]">
              <button>수정</button>
              <button>삭제</button>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-wrap gap-2">
              {developments.map((development) => (
                <Label
                  key={development}
                  title={developmentTypeString[development]}
                  option={{
                    background: "bg-blue-1",
                    textColor: "text-blue-5",
                  }}
                />
              ))}
            </div>
          </div>
          <div className="flex gap-x-1.5">
            {imgUrls.slice(0, 3).map((imgUrl) => (
              <img
                src={imgUrl}
                alt="img"
                className="w-[103px] h-[103px] object-cover"
              />
            ))}
            <button className="text-[24px] rounded-[5px] w-[103px] h-[103px] bg-black-2 text-black-4 flex items-center justify-center">
              +3
            </button>
          </div>
          <div className="text-[13px] bg-blue-1 rounded-[5px] text-black-8 py-[10.5px] px-3">
            <LineBreaks texts={script} />
          </div>
        </div>
      </Card>
    </button>
  );
}
