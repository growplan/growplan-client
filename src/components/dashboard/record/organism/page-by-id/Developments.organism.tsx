import { developmentTypeString } from "@/interface/Development";
import { Record } from "@/interface/Record";
import { Label } from "fast-jsx";
import { cn } from "fast-jsx/util";

export default function Developments({ record }: { record: Record }) {
  const container = {
    displays: "flex",
  };
  return (
    <div className={cn(container)}>
      <div className="grid grid-cols-4 gap-2">
        {record.developmentTypes.map((type) => (
          <Label
            title={developmentTypeString[type]}
            option={{
              background: "bg-blue-1",
              textColor: "text-blue-5",
            }}
          />
        ))}
      </div>
    </div>
  );
}
