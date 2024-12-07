import { Record } from "@/interface/Record";
import RecordBox from "../molecule/RecordBox.molecule";
import { cn } from "fast-jsx/util";

const records: Record[] = [
  {
    id: 1,
    script: "아이의 언어 발달이 빠르게 이루어졌습니다.",
    recordedDate: "2023-01-01",
    developmentTypes: ["GM", "LM"],
    isLiked: true,
    imageUrls: [
      "https://example.com/image1.jpg",
      "https://example.com/image2.jpg",
    ],
  },
];

export default function Records() {
  const container = {
    displays: "flex flex-col gap-y-5",
  };
  return (
    <div className={cn(container)}>
      {records.map((record) => (
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
