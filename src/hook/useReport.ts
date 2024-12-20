import { DevelopmentType } from "@/interface/Development";
import { useQuery } from "react-query";
import useSign from "./useSign";
import useChild from "./useChild";
import { userApi } from "@/connection";

export default function useReport(
  developmentType: DevelopmentType,
  noAction?: boolean
) {
  const { sign } = useSign();
  const { nowChild } = useChild();
  const { data: report, isLoading } = useQuery({
    enabled: !noAction && !!sign && !!nowChild,
    queryKey: ["getSurveyReport", developmentType],
    queryFn: () =>
      userApi.child.report.get(
        Number(sign?.id),
        Number(nowChild?.id),
        developmentType
      ),
  });
  return { report, isLoading };
}
