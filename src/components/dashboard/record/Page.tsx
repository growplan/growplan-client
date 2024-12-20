import { useQuery } from "react-query";
import FloatButton from "./atom/FloatButton.atom";
import Developments from "./organism/Developments.organism";
import Records from "./organism/Records.organism";
import { userApi } from "@/connection";
import useSign from "@/hook/useSign";
import useChild from "@/hook/useChild";
import { Action } from "fast-jsx";
import Loading from "@/design/Loading";

export default function RecordPage() {
  const { sign } = useSign();
  const { nowChild } = useChild();
  const { data: records } = useQuery({
    enabled: !!sign,
    queryKey: ["getRecords"],
    queryFn: () =>
      userApi.child.record.get(Number(sign?.id), Number(nowChild?.id)),
  });
  return (
    <Action.Replace actions={[[!records, <Loading.Screen />]]}>
      <div>
        <Developments />
        <div className="mt-8 flex flex-col items-center">
          <Records records={records} />
          <FloatButton />
        </div>
      </div>
    </Action.Replace>
  );
}
