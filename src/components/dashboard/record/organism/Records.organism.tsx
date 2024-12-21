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
      {records
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
        ))}
    </div>
  );
}
