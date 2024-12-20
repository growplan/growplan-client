import RecordLayout from "./PageById.layout";
import { cn } from "fast-jsx/util";
import useChild from "@/hook/useChild";
import useSign from "@/hook/useSign";
import { userApi } from "@/connection";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import PageByIdOrganism from "./organism/page-by-id";
import HeaderDetail from "@/design/HeaderDetail";

export default function RecordPageById() {
  const { recordId } = useParams();
  const { sign } = useSign();
  const { nowChild } = useChild();
  const { data: record } = useQuery({
    enabled: !!sign && !!nowChild && !!recordId,
    queryFn: () =>
      userApi.child.record.getById(
        Number(sign?.id),
        Number(nowChild?.id),
        Number(recordId)
      ),
  });
  const container = {
    displays: "relative flex flex-col items-start gap-y-7",
  };

  return (
    <div className="relative z-0">
      {record && (
        <RecordLayout>
          <div className={cn(container)}>
            <PageByIdOrganism.Developments record={record} />
            <PageByIdOrganism.ImageBox record={record} />
            <PageByIdOrganism.ScriptBox record={record} />
          </div>
        </RecordLayout>
      )}
      <HeaderDetail title={`${record?.recordedDate}`} />
    </div>
  );
}
