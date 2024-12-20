import { Record } from "@/interface/Record";

export default function ImageBox({ record }: { record: Record }) {
  return (
    <div className="z-0">
      <div className="flex">
        {record.imageUrls.slice(0, 1).map((url) => (
          <img
            key={url}
            alt="record-image"
            src={url}
            className="w-[353px] h-[353px] object-contain"
          />
        ))}
      </div>
    </div>
  );
}
