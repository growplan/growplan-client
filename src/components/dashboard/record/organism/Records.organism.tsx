import { Record } from "@/interface/Record";
import RecordBox from "../molecule/RecordBox.molecule";
import { cn } from "fast-jsx/util";

interface RecordProps {
  records?: Record[];
}
export default function Records({ records }: RecordProps) {
  const container = {
    displays: "flex flex-col gap-y-5",
  };
  return (
    <div className={cn(container)}>
      {records?.map((record) => (
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
