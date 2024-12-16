import { userApi } from "@/connection";
import useSign from "./useSign";
import useChild from "./useChild";
import { useQuery } from "react-query";

export function useSurveyByChildId() {
  const { sign } = useSign();
  const { nowChild } = useChild();
  const { data: survey, isLoading } = useQuery({
    enabled: !!sign && !!nowChild,
    queryKey: ["getSurvey"],
    queryFn: () =>
      userApi.child.survey.get(Number(sign?.id), Number(nowChild?.id)),
  });
  return { survey, isLoading };
}
