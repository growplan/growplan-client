import { Record } from "@/interface/Record";
import RecordBox from "../molecule/RecordBox.molecule";
import { cn } from "fast-jsx/util";
import { DevelopmentType } from "@/interface/Development";

interface RecordProps {
  records?: Record[];
  selectedDevelopmentType?: DevelopmentType;
}
export default function Records({
  records,
  selectedDevelopmentType,
}: RecordProps) {
  const container = {
    displays: "flex flex-col gap-y-5",
  };
  return (
    <div className={cn(container)}>
      {records && records.length > 0 ? (
        records
          ?.filter(
            (r) =>
              !selectedDevelopmentType ||
              r.developmentTypes.includes(selectedDevelopmentType)
          )
          .map((record) => (
            <RecordBox
              key={record.id}
              recordId={record.id}
              date={record.recordedDate}
              isLiked={record.isLiked}
              imgUrls={record.imageUrls}
              developments={record.developmentTypes}
              script={record.script}
            />
          ))
      ) : (
        <div className="w-full h-[calc(100vh-200px)] flex justify-center items-center text-blue-5 text-xl">
          아이의 발달 기록을 남겨주세요 :D
        </div>
      )}
    </div>
  );
}
